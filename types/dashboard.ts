import { ActiveDelivery, DeliveryRequest } from "./delivery";

export interface DashboardStats {
  partnerName: string;
  earnings: number;
  deliveries: number;
  rating: number;
  acceptance: number;
  notifications: number;
}

export interface DashboardState {
  loading: boolean;
  stats: DashboardStats;
  requests: DeliveryRequest[];
  activeDelivery: ActiveDelivery | null;
}