"use client";

import { useEffect, useState } from "react";

import { getRequest } from "@/services/requestService";
import { RequestModel } from "@/types/request";

export default function useRequest(id: string) {
  const [loading, setLoading] = useState(true);
  const [request, setRequest] = useState<RequestModel>();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    void load();
  }, [id]);

  async function load() {
    try {
      setLoading(true);

      const data = await getRequest(id);

      setRequest(data);
      setError("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    request,
    error,
    reload: load,
  };
}