
export type DeliveryStatus =
  | "pending"
  | "accepted"
  | "picked_up"
  | "delivering"
  | "completed"
  | "cancelled";

export interface DeliveryRequest {
  id: string;

  customerId: string;

  companyId: string;

  pickupAddress: string;

  deliveryAddress: string;

  pickupLat: number;

  pickupLng: number;

  deliveryLat: number;

  deliveryLng: number;

  distanceKm: number;

  estimatedMinutes: number;

  offerPrice: number;

  weightKg: number;

  wasteType: string;

  status: DeliveryStatus;

  createdAt: Date | null;
}

export interface ActiveDelivery {
  id: string;

  orderNumber: string;

  customerId: string;

  partnerId: string;

  pickupAddress: string;

  deliveryAddress: string;

  estimatedMinutes: number;

  remainingDistanceKm: number;

  progress: number;

  status: Exclude<
    DeliveryStatus,
    "pending" | "completed" | "cancelled"
  >;

  mapImage?: string;
}