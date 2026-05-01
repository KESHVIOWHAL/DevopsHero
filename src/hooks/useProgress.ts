import { useState, useEffect } from 'react';

export interface UserProgress {
  completedLessons: string[];
  currentModule: string;
  points: number;
  streak: number;
  lastActive: string | null;
}

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  currentModule: 'intro',
  points: 0,
  streak: 0,
  lastActive: null,
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('devops_hero_progress');
    if (saved) return JSON.parse(saved);
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    localStorage.setItem('devops_hero_progress', JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (lessonId: string, points: number) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      
      const today = new Date().toDateString();
      const isNewStreak = prev.lastActive && prev.lastActive !== today;
      
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        points: prev.points + points,
        streak: isNewStreak ? prev.streak + 1 : (prev.streak || 1),
        lastActive: today,
      };
    });
  };

  const resetProgress = () => {
    setProgress(DEFAULT_PROGRESS);
  };

  return { progress, completeLesson, resetProgress };
}
