// app/components/DateItem.tsx
import Image from 'next/image';

type DateItemProps = {
  name: string;
  eventType: string; // ex: "Birthday"
  date: string;      // ex: "12 May"
  daysLeft: number;
  imageUrl: string;
};

export default function DateItem({ name, eventType, date, daysLeft, imageUrl }: DateItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-3">
        <Image
          src={imageUrl}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">
            {eventType} – {date}
          </p>
        </div>
      </div>
      <span className={`text-sm font-medium ${daysLeft <= 7 ? 'text-red-600' : 'text-green-600'}`}>
        In {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
      </span>
    </div>
  );
}