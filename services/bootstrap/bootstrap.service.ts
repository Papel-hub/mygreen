import { User } from "firebase/auth";

import {
  doc,
  writeBatch,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase/config";

class BootstrapService {
  async createPartner(user: User) {
    const batch = writeBatch(db);

    /*
     * partners/{uid}
     */

    const partnerRef = doc(
      db,
      "partners",
      user.uid
    );

    batch.set(partnerRef, {
      uid: user.uid,

      firstName: "",

      lastName: "",

      email: user.email,

      phone: "",

      avatar: "",

      online: false,

      verified: false,

      rating: 5,

      totalDeliveries: 0,

      acceptanceRate: 100,

      createdAt: serverTimestamp(),

      updatedAt: serverTimestamp(),
    });

    /*
     * Dashboard Stats
     */

    const statsRef = doc(
      db,
      "partners",
      user.uid,
      "stats",
      "dashboard"
    );

    batch.set(statsRef, {
      todayDeliveries: 0,

      todayEarnings: 0,

      completedDeliveries: 0,

      cancelledDeliveries: 0,

      acceptanceRate: 100,

      rating: 5,

      notifications: 0,
    });

    /*
     * Wallet
     */

    const walletRef = doc(
      db,
      "partners",
      user.uid,
      "wallet",
      "default"
    );

    batch.set(walletRef, {
      balance: 0,

      currency: "EUR",

      pendingBalance: 0,

      totalEarned: 0,
    });

    /*
     * Settings
     */

    const settingsRef = doc(
      db,
      "partners",
      user.uid,
      "settings",
      "preferences"
    );

    batch.set(settingsRef, {
      language: "en",

      theme: "light",

      notifications: true,

      darkMode: false,
    });

    /*
     * Vehicle
     */

    const vehicleRef = doc(
      db,
      "partners",
      user.uid,
      "vehicle",
      "default"
    );

    batch.set(vehicleRef, {
      type: "",

      plate: "",

      insurance: "",

      verified: false,
    });

    /*
     * Documents
     */

    const documentsRef = doc(
      db,
      "partners",
      user.uid,
      "documents",
      "driver"
    );

    batch.set(documentsRef, {
      profilePhoto: "",

      proofOfAddress: "",

      drivingLicence: "",

      insuranceDocument: "",

      uploaded: false,
    });

    await batch.commit();
  }
}

export default new BootstrapService();