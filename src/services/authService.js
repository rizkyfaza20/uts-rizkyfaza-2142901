import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { firebaseConfig } from '../config/firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class AuthService {
  // Register new user
  async register(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: this.handleError(error) };
    }
  }

  // Login user
  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: this.handleError(error) };
    }
  }

  // Logout user
  async logout() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, error: this.handleError(error) };
    }
  }

  // Get current user
  getCurrentUser() {
    return auth.currentUser;
  }

  // Listen to auth state changes
  onAuthStateChanged(callback) {
    return onAuthStateChanged(auth, callback);
  }

  // Handle Firebase errors
  handleError(error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'Email sudah terdaftar';
      case 'auth/invalid-email':
        return 'Email tidak valid';
      case 'auth/weak-password':
        return 'Password minimal 6 karakter';
      case 'auth/user-not-found':
        return 'Email tidak terdaftar';
      case 'auth/wrong-password':
        return 'Password salah';
      case 'auth/invalid-credential':
        return 'Email atau password salah';
      default:
        return 'Terjadi kesalahan. Silakan coba lagi';
    }
  }
}

export default new AuthService();
export { auth };