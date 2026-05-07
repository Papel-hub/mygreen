'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SVGProps } from 'react'; // Importe o tipo para SVGs

export default function Footer() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Dates', href: '/dates', icon: CalendarCheckIcon },
    { name: 'Scheduled', href: '/scheduled', icon: ClockIcon },
    { name: 'Support', href: '/support', icon: HeadphonesIcon },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <ul className="flex justify-around items-center space-x-2 sm:space-x-6 md:space-x-8">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <li key={tab.name} className="flex flex-col items-center">
                <Link
                  href={tab.href}
                  aria-label={tab.name}
                  className={`group flex flex-col items-center p-2 rounded-lg transition-all duration-300 ease-in-out ${
                    isActive
                      ? 'text-green-600 scale-105'
                      : 'text-gray-500 hover:text-gray-700 hover:scale-105'
                  }`}
                >
                  <tab.icon
                    className={`w-6 h-6 mb-1 transition-transform duration-300 ${
                      isActive ? 'animate-bounce-subtle' : ''
                    }`}
                  />
                  <span
                    className={`text-xs font-medium transition-colors duration-300 ${
                      isActive ? 'font-semibold' : ''
                    }`}
                  >
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

// --- Ícones Tipados Corretamente ---

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function CalendarCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HeadphonesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}