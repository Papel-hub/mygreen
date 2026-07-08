"use client";

import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { db } from "@/lib/firebase/config";
import { RequestModel } from "@/types/request";

type RealtimeRequestCallback = (data: RequestModel) => void;

export default function useRealtimeRequest(
  id: string,
  callback: RealtimeRequestCallback
) {
  useEffect(() => {
    if (!id) {
      return;
    }

    const unsubscribe = onSnapshot(
      doc(db, "requests", id),
      (snapshot) => {
        const data = snapshot.data();

        if (!data) {
          return;
        }

        callback({
          id: snapshot.id,
          ...(data as Omit<RequestModel, "id">),
        });
      }
    );

    return unsubscribe;
  }, [id, callback]);
}