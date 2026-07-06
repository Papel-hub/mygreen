"use client";

import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export default function SectionTitle({
  title,
  subtitle,
  action,
}: SectionTitleProps) {
  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-500">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div>
          {action}
        </div>
      )}
    </div>
  );
}