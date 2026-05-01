import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
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
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) {
        setLoading(false);
        // If logged out, reset or use local? 
        // For now, let's just stick to default progress when logged out
        setProgress(DEFAULT_PROGRESS);
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
    if (!user) {
      // Local fallback? For now, we require log in to track progress properly in this "backend" version
      return;
    }

    if (progress.completedLessons.includes(lessonId)) return;

    const today = new Date().toDateString();
    const isNewStreak = progress.lastActive && progress.lastActive !== today;
    
    const updatedProgress: UserProgress = {
      ...progress,
      completedLessons: [...progress.completedLessons, lessonId],
      points: progress.points + points,
      streak: isNewStreak ? progress.streak + 1 : (progress.streak || 1),
      lastActive: today,
    };

    try {
      await setDoc(doc(db, 'users', user.uid), updatedProgress);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}`);
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
