import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db, getMockUser } from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

export interface UserProgress {
  completedLessons: string[];
  points: number;
  streak: number;
  lastActive: string | null;
  displayName?: string;
  photoURL?: string;
}

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  points: 0,
  streak: 0,
  lastActive: null,
};

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for mock user first
    const mockUser = getMockUser();
    if (mockUser) {
      setUser(mockUser as any);
      setLoading(false);
      const localProgress = JSON.parse(localStorage.getItem('devops-progress') || '{"completedLessons":[],"points":0,"streak":0,"lastActive":null}');
      setProgress(localProgress);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) {
        setLoading(false);
        // Load from localStorage for non-logged in users
        const localProgress = JSON.parse(localStorage.getItem('devops-progress') || '{"completedLessons":[],"points":0,"streak":0,"lastActive":null}');
        setProgress(localProgress);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    const userDocRef = doc(db, 'users', user.uid);
    
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        setProgress(docSnap.data() as UserProgress);
      } else {
        // Initialize new user
        const initial = {
          ...DEFAULT_PROGRESS,
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
          lastActive: new Date().toDateString()
        };
        setDoc(userDocRef, initial).catch(err => handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}`));
      }
      setLoading(false);
    }, (err) => {
      handleFirestoreError(err, OperationType.GET, `users/${user.uid}`);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const completeLesson = async (lessonId: string, points: number) => {
    console.log('completeLesson called:', { lessonId, points, user: !!user });
    
    // Check for mock user
    const mockUser = getMockUser();
    if (mockUser) {
      console.log('Using mock user system');
      const localProgress = JSON.parse(localStorage.getItem('devops-progress') || '{"completedLessons":[],"points":0,"streak":0,"lastActive":null}');
      console.log('Local progress before:', localProgress);
      
      if (!localProgress.completedLessons.includes(lessonId)) {
        localProgress.completedLessons.push(lessonId);
        localProgress.points += points;
        localProgress.lastActive = new Date().toDateString();
        localStorage.setItem('devops-progress', JSON.stringify(localProgress));
        setProgress(localProgress);
        console.log('Local progress after:', localProgress);
      } else {
        console.log('Lesson already completed:', lessonId);
      }
      return;
    }

    if (!user) {
      // Local fallback for non-logged in users
      const localProgress = JSON.parse(localStorage.getItem('devops-progress') || '{"completedLessons":[],"points":0,"streak":0,"lastActive":null}');
      console.log('Local progress before:', localProgress);
      
      if (!localProgress.completedLessons.includes(lessonId)) {
        localProgress.completedLessons.push(lessonId);
        localProgress.points += points;
        localProgress.lastActive = new Date().toDateString();
        localStorage.setItem('devops-progress', JSON.stringify(localProgress));
        setProgress(localProgress);
        console.log('Local progress after:', localProgress);
      } else {
        console.log('Lesson already completed:', lessonId);
      }
      return;
    }

    if (progress.completedLessons.includes(lessonId)) {
      console.log('Lesson already completed in Firebase:', lessonId);
      return;
    }

    const today = new Date().toDateString();
    const isNewStreak = progress.lastActive && progress.lastActive !== today;
    
    const updatedProgress: UserProgress = {
      ...progress,
      completedLessons: [...progress.completedLessons, lessonId],
      points: progress.points + points,
      streak: isNewStreak ? progress.streak + 1 : (progress.streak || 1),
      lastActive: today,
    };

    console.log('Firebase progress update:', { lessonId, points, updatedProgress });

    try {
      await setDoc(doc(db, 'users', user.uid), updatedProgress);
      // Also save to localStorage as backup
      localStorage.setItem('devops-progress', JSON.stringify(updatedProgress));
      console.log('Firebase save successful');
    } catch (err) {
      console.log('Firebase save failed, using fallback:', err);
      handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}`);
      // Fallback to localStorage if Firebase fails
      localStorage.setItem('devops-progress', JSON.stringify(updatedProgress));
      setProgress(updatedProgress);
    }
  };

  const resetProgress = async () => {
    if (!user) return;
    try {
      await setDoc(doc(db, 'users', user.uid), DEFAULT_PROGRESS);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}`);
    }
  };

  return { progress, user, loading, completeLesson, resetProgress };
}
