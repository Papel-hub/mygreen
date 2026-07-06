"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import HomeHeader from "./components/HomeHeader";
import StatsGrid from "./components/StatsGrid";
import SectionTitle from "./components/SectionTitle";
import NewRequestCard from "./components/NewRequestCard";
import ActiveDeliveryCard from "./components/ActiveDeliveryCard";
import LoadingScreen from "@/components/ui/LoadingScreen";

import { usePartnerDashboard } from "@/hook/dashboard/usePartnerDashboard";

export default function HomePage() {
  const {
    loading,
    stats,
    requests,
    activeDelivery,
    acceptRequest,
    declineRequest,
  } = usePartnerDashboard();

  return (
    <ProtectedRoute>
      {loading ? (
        <LoadingScreen />
      ) : (
        <main className="mx-auto max-w-7xl space-y-8 p-6">

          <HomeHeader
            partnerName={stats.partnerName}
            notificationCount={stats.notifications}
          />

          <StatsGrid
            earnings={`€${stats.earnings.toFixed(2)}`}
            deliveries={stats.deliveries}
            rating={stats.rating}
            acceptanceRate={stats.acceptance}
          />

          {/* Requests */}

          <section>

            <SectionTitle
              title="New Requests"
              subtitle={`${requests.length} available requests`}
            />

            <div className="mt-5 grid gap-5 lg:grid-cols-2">

              {requests.length === 0 ? (

                <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">

                  <h3 className="font-semibold text-gray-700">
                    No requests available
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    New delivery requests will appear here automatically.
                  </p>

                </div>

              ) : (

                  requests.map((request) => (
                    <NewRequestCard
                      key={request.id}
                      request={request}
                      // Em vez de passar direto, criamos uma arrow function passando o ID
                      onAccept={() => acceptRequest(request.id)}
                      onDecline={() => declineRequest(request.id)}
                    />
                  ))

              )}

            </div>

          </section>

          {/* Active Delivery */}

          <section>

            <SectionTitle
              title="Active Delivery"
              subtitle={
                activeDelivery
                  ? `Order #${activeDelivery.orderNumber}`
                  : "No active delivery"
              }
            />

            <div className="mt-5">

              {activeDelivery ? (

                <ActiveDeliveryCard
                  delivery={activeDelivery}
                />

              ) : (

                <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">

                  <h3 className="font-semibold text-gray-700">
                    You&apos;re available
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Accept a request to start your next delivery.
                  </p>

                </div>

              )}

            </div>

          </section>

        </main>
      )}
    </ProtectedRoute>
  );
}