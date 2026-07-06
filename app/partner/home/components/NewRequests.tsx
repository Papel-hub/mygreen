import { MapPin } from "lucide-react";

interface NewRequestProps {
  collection: string;
  delivery: string;
  price: number;
}

export default function NewRequest({
  collection,
  delivery,
  price,
}: NewRequestProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">

      <div className="flex justify-between">

        <div className="space-y-4">

          <div className="flex gap-2">
            <MapPin
              size={18}
              className="text-[#169B62]"
            />

            <div>
              <p className="font-semibold text-sm">
                Collection
              </p>

              <p className="text-xs text-gray-500">
                {collection}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <MapPin
              size={18}
              className="text-red-500"
            />

            <div>
              <p className="font-semibold text-sm">
                Delivery
              </p>

              <p className="text-xs text-gray-500">
                {delivery}
              </p>
            </div>
          </div>

        </div>

        <div className="text-right">

          <h2 className="text-2xl font-black">
            €{price.toFixed(2)}
          </h2>

          <span className="text-xs text-gray-400">
            Offer
          </span>

        </div>

      </div>

      <div className="mt-5 flex gap-3">

        <button className="flex-1 h-11 rounded-xl border border-red-300 text-red-600 font-semibold hover:bg-red-50 transition">
          Decline
        </button>

        <button className="flex-1 h-11 rounded-xl bg-[#FF8200] text-white font-semibold hover:bg-orange-600 transition">
          Make Offer
        </button>

      </div>

    </div>
  );
}