import Image from "next/image";
import { 
  MapPin, 
  Clock, 

} from "lucide-react";



export default function ActiveDelivery() {
  return (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-3.5 flex-1 pr-2">
                <span className="text-[11px] font-medium text-gray-400 block">Order #IGD4587</span>
                
                {/* Ponto de Coleta */}
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-gray-800">Collection</p>
                    <p className="text-xs text-gray-500">Dublin 2, Ireland</p>
                  </div>
                </div>

                {/* Ponto de Entrega */}
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-gray-800">Delivery</p>
                    <p className="text-xs text-gray-500">Dublin 6, Ireland</p>
                  </div>
                </div>
              </div>

              {/* Mini Mapa Estilizado */}
              <div className="w-28 h-28 bg-blue-50 border border-blue-100 rounded-lg                                                                                                                                                                                                                        relative overflow-hidden shrink-0">
                {/* Substitua pela imagem real do mapa ou componente interativo */}
                <Image 
                  src="/images/mini-map-placeholder.png" 
                  alt="Route Map Route" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Tempo Estimado e Botão */}
            <div className="flex items-center justify-between text-xs text-gray-500 pb-1">
              <span className="flex items-center gap-1"><Clock size={14} /> Estimated time</span>
              <span className="font-bold text-gray-800">25 min</span>
            </div>

            <button className="w-full py-3 bg-[#169B62] hover:bg-[#095632] text-white font-semibold rounded-lg                                                                                                                                                                                                                        text-sm transition">
              View Details
            </button>
          </div>
            );
}