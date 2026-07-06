"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import DashboardService from "@/services/dashboard/dashboard.service";
import { DashboardState } from "@/types/dashboard";

export function usePartnerDashboard() {
  const { user } = useAuth();

  // 1. Mantemos o estado apenas para os dados reais da API/Firebase
  const [state, setState] = useState<Omit<DashboardState, "loading">>({
    stats: {
      partnerName: "",
      earnings: 0,
      deliveries: 0,
      rating: 0,
      acceptance: 0,
      notifications: 0,
    },
    requests: [],
    activeDelivery: null,
  });

  useEffect(() => {
    // Se não há usuário logado, saímos sem chamar o setState síncrono. zero cascading renders!
    if (!user) return;

    const unsubscribeStats = DashboardService.listenStats(
      user.uid,
      (stats) => {
        setState((prev) => ({ ...prev, stats }));
      }
    );

    const unsubscribeRequests = DashboardService.listenRequests(
      (requests) => {
        setState((prev) => ({ ...prev, requests }));
      }
    );

    const unsubscribeDelivery = DashboardService.listenActiveDelivery(
      user.uid,
      (activeDelivery) => {
        setState((prev) => ({ ...prev, activeDelivery }));
      }
    );

    return () => {
      unsubscribeStats();
      unsubscribeRequests();
      unsubscribeDelivery();
    };
  }, [user]);

  // 2. Criamos as funções que a sua HomePage está tentando usar
  const acceptRequest = async (requestId: string) => {
    try {
      // Substitua pela chamada real do seu serviço, ex:
      // await DashboardService.acceptRequest(requestId);
      console.log("Aceitou a requisição:", requestId);
    } catch (error) {
      console.error("Erro ao aceitar requisição:", error);
    }
  };

  const declineRequest = async (requestId: string) => {
    try {
      // Substitua pela chamada real do seu serviço, ex:
      // await DashboardService.declineRequest(requestId);
      console.log("Recusou a requisição:", requestId);
    } catch (error) {
      console.error("Erro ao recusar requisição:", error);
    }
  };

  // 3. Calculamos o loading dinamicamente (Estado Derivado)
  // Se não tem user, não está carregando nada. Se tem user, ele fica em loading até os dados do parceiro chegarem.
  const loading = user ? (state.stats.partnerName === "" ? true : false) : false;

  // 4. Retornamos tudo junto para a HomePage conseguir desestruturar perfeitamente
  return {
    ...state,
    loading,
    acceptRequest,
    declineRequest,
  };
}