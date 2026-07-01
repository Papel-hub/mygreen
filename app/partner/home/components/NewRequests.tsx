import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  Bell, 
  Star, 
  MapPin, 
  Clock, 
  LayoutDashboard, 
  ClipboardList, 
  Truck, 
  User 
} from "lucide-react";

export default function NewRequests() {
  return (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
            <div className="flex justify-between items-center">
              <div className="space-y-3">
                {/* Coleta */}
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-800">Collection</p>
                    <p className="text-xs text-gray-500">Dublin 4, Ireland</p>
                  </div>
                </div>
                {/* Entrega */}
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-[#b91c1c] mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-800">Delivery</p>
                    <p className="text-xs text-gray-500">Dublin 8, Ireland</p>
                  </div>
                </div>
              </div>

              {/* Valor da Proposta */}
              <div className="text-right">
                <span className="text-xl font-black text-gray-900">€9.50</span>
                <p className="text-[10px] text-gray-400 font-medium">Your Offer</p>
              </div>
            </div>

            {/* Botões Duplos (Decline / Make Offer) */}
            <div className="flex gap-3 pt-1">
              <button className="w-1/2 py-3 bg-white text-[#b91c1c] border border-red-200 hover:bg-red-50 font-semibold rounded-lg                                                                                                                                                                                                                        text-sm transition">
                Decline
              </button>
              <button className="w-1/2 py-3 bg-[#FF8200] hover:bg-orange-600 text-white font-semibold rounded-lg                                                                                                                                                                                                                        text-sm shadow-sm transition">
                Make Offer
              </button>
            </div>
          </div>
            );
}