import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  UserCredential,
} from "firebase/auth";

import { auth } from "@/lib/firebase/config";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class AuthService {
  async login(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  async register({
    firstName,
    lastName,
    email,
    password,
  }: RegisterData): Promise<UserCredential> {
    const credential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await updateProfile(
      credential.user,
      {
        displayName: `${firstName} ${lastName}`,
      }
    );

    return credential;
  }

  async logout() {
    await signOut(auth);
  }

  async resetPassword(email: string) {
    await sendPasswordResetEmail(
      auth,
      email
    );
  }

  getCurrentUser() {
    return auth.currentUser;
  }
}

export default new AuthService();