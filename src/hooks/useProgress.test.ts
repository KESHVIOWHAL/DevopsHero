import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useProgress } from '../hooks/useProgress';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot, setDoc } from 'firebase/firestore';

describe('useProgress Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with default progress', () => {
    const { result } = renderHook(() => useProgress());
    expect(result.current.progress.points).toBe(0);
    expect(result.current.progress.completedLessons).toEqual([]);
    expect(result.current.loading).toBe(true);
  });

  it('should handle auth state transitions', async () => {
    let authCallback: any;
    (onAuthStateChanged as any).mockImplementation((auth: any, cb: any) => {
      authCallback = cb;
      return vi.fn();
    });

    const { result } = renderHook(() => useProgress());

    await act(async () => {
      authCallback({ uid: 'test-user', displayName: 'Test User' });
    });

    expect(result.current.user?.uid).toBe('test-user');
  });

  it('should not update progress if not logged in', async () => {
    const { result } = renderHook(() => useProgress());
    
    await act(async () => {
      await result.current.completeLesson('lesson-1', 10);
    });

    expect(setDoc).not.toHaveBeenCalled();
    expect(result.current.progress.points).toBe(0);
  });
});
