import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock Firebase modules before importing useProgress
vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn(),
  GoogleAuthProvider: vi.fn().mockImplementation(() => ({
    setCustomParameters: vi.fn()
  })),
  getAuth: vi.fn(() => ({ currentUser: null }))
}));

vi.mock('firebase/firestore', () => ({
  onSnapshot: vi.fn(),
  setDoc: vi.fn(),
  doc: vi.fn(),
  getFirestore: vi.fn()
}));

vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(() => ({ name: 'test-app' }))
}));

// Import the mocked modules for use in tests
import { onAuthStateChanged } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';
import { useProgress } from '../hooks/useProgress';

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
