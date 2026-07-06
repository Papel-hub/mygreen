import {
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  onSnapshot,
  query,
  Query,
  QuerySnapshot,
  Timestamp,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase/config";

import {
  ActiveDelivery,
  DeliveryRequest,
} from "@/types/delivery";

import {
  DashboardStats,
} from "@/types/dashboard";

class DashboardService {
  private statsRef(uid: string): DocumentReference {
    return doc(
      db,
      "partners",
      uid,
      "stats",
      "dashboard"
    );
  }

  private requestsQuery(): Query {
    return query(
      collection(db, "deliveryRequests"),
      where("status", "==", "pending")
    );
  }

  private deliveriesQuery(uid: string): Query {
    return query(
      collection(db, "deliveries"),
      where("partnerId", "==", uid),
      where("status", "in", [
        "accepted",
        "picked_up",
        "delivering",
      ])
    );
  }

  listenStats(
    uid: string,
    callback: (stats: DashboardStats) => void
  ): () => void {
    return onSnapshot(this.statsRef(uid), (snapshot) => {
      if (!snapshot.exists()) {
        callback({
          partnerName: "",
          earnings: 0,
          deliveries: 0,
          rating: 0,
          acceptance: 0,
          notifications: 0,
        });

        return;
      }

      const data = snapshot.data();

      callback({
        partnerName: String(data.partnerName ?? ""),
        earnings: Number(data.earnings ?? 0),
        deliveries: Number(data.deliveries ?? 0),
        rating: Number(data.rating ?? 0),
        acceptance: Number(data.acceptance ?? 0),
        notifications: Number(data.notifications ?? 0),
      });
    });
  }

  listenRequests(
    callback: (
      requests: DeliveryRequest[]
    ) => void
  ): () => void {
    return onSnapshot(
      this.requestsQuery(),
      (snapshot: QuerySnapshot) => {
        const requests: DeliveryRequest[] =
          snapshot.docs.map((docSnapshot) => {
            const data = docSnapshot.data();

            return {
              id: docSnapshot.id,

              customerId: String(
                data.customerId
              ),

              companyId: String(
                data.companyId
              ),

              pickupAddress: String(
                data.pickupAddress
              ),

              deliveryAddress: String(
                data.deliveryAddress
              ),

              pickupLat: Number(
                data.pickupLat
              ),

              pickupLng: Number(
                data.pickupLng
              ),

              deliveryLat: Number(
                data.deliveryLat
              ),

              deliveryLng: Number(
                data.deliveryLng
              ),

              distanceKm: Number(
                data.distanceKm
              ),

              estimatedMinutes: Number(
                data.estimatedMinutes
              ),

              offerPrice: Number(
                data.offerPrice
              ),

              weightKg: Number(
                data.weightKg
              ),

              wasteType: String(
                data.wasteType
              ),

              status: data.status,

              createdAt:
                data.createdAt instanceof Timestamp
                  ? data.createdAt.toDate()
                  : null,
            };
          });

        callback(requests);
      }
    );
  }

  listenActiveDelivery(
    uid: string,
    callback: (
      delivery: ActiveDelivery | null
    ) => void
  ): () => void {
    return onSnapshot(
      this.deliveriesQuery(uid),
      (snapshot: QuerySnapshot) => {
        if (snapshot.empty) {
          callback(null);

          return;
        }

        const docSnapshot = snapshot.docs[0];

        const data = docSnapshot.data();

        callback({
          id: docSnapshot.id,

          orderNumber: String(
            data.orderNumber
          ),

          customerId: String(
            data.customerId
          ),

          partnerId: String(
            data.partnerId
          ),

          pickupAddress: String(
            data.pickupAddress
          ),

          deliveryAddress: String(
            data.deliveryAddress
          ),

          estimatedMinutes: Number(
            data.estimatedMinutes
          ),

          remainingDistanceKm: Number(
            data.remainingDistanceKm
          ),

          progress: Number(
            data.progress
          ),

          status: data.status,

          mapImage:
            typeof data.mapImage === "string"
              ? data.mapImage
              : undefined,
        });
      }
    );
  }
}

export default new DashboardService();