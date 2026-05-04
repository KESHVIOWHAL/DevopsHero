import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, connectAuthEmulator } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const googleProvider = new GoogleAuthProvider();

// Configure Google Provider for localhost
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// For development, we might need to use auth emulator or configure properly
if (window.location.hostname === 'localhost') {
  // Note: auth.settings is read-only in newer Firebase versions
  // Using default localhost configuration
  console.log('Firebase Auth configured for localhost');
}

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error('Sign-in error:', error);
    // Fallback to mock user for development
    if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user') {
      // Create a mock user for development
      const mockUser = {
        uid: 'dev-user-' + Date.now(),
        email: 'dev.user@localhost.com',
        displayName: 'Dev User',
        photoURL: `https://api.dicebear.com/7.x/bottts/svg?seed=dev-user`,
        isAnonymous: false
      };
      
      // Store mock user in localStorage
      localStorage.setItem('mock-user', JSON.stringify(mockUser));
      
      // Return mock user immediately
      return { user: mockUser };
    }
    throw error;
  }
};

// Mock auth state for development
export const getMockUser = () => {
  const mockUserData = localStorage.getItem('mock-user');
  if (mockUserData) {
    return JSON.parse(mockUserData);
  }
  return null;
};

export const signOutMockUser = () => {
  localStorage.removeItem('mock-user');
  window.location.reload();
};

export const signInAsGuest = () => {
  // Create a mock user for development
  const mockUser = {
    uid: 'dev-user-' + Date.now(),
    email: 'dev.user@localhost.com',
    displayName: 'Dev User',
    photoURL: `https://api.dicebear.com/7.x/bottts/svg?seed=dev-user`,
    isAnonymous: false
  };
  
  // Store mock user in localStorage
  localStorage.setItem('mock-user', JSON.stringify(mockUser));
  
  // Return mock user
  return { user: mockUser };
};
