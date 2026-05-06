'use client'; // Necessário porque usamos hooks como usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Dates', href: '/dates', icon: CalendarCheckIcon },
    { name: 'Scheduled', href: '/scheduled', icon: ClockIcon },
    { name: 'Support', href: '/support', icon: HeadphonesIcon },
  ];

  return (
<footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
  <nav className="px-2 py-2">
    <ul className="flex justify-between items-center">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <li key={tab.name} className="flex-1">
            <Link
              href={tab.href}
              className={`w-full flex flex-col items-center p-2 transition-all duration-300 ${
                isActive ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <tab.icon className={`w-7 h-7 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-[10px] mt-1 transition-colors duration-300 ${isActive ? 'font-semibold' : ''}`}>
                {tab.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
</footer>
  );
}

// Ícones SVG inline (mesmos de antes)
function HomeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function CalendarCheckIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HeadphonesIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}