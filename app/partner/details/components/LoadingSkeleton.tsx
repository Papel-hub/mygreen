"use client";

export default function LoadingSkeleton() {
    return (
        <div className="max-w-md mx-auto min-h-screen bg-gray-50 p-4 space-y-4 animate-pulse">

            <div className="h-20 bg-gray-200 rounded-xl"></div>

            <div className="h-10 bg-gray-200 rounded-lg"></div>

            <div className="h-40 bg-gray-200 rounded-2xl"></div>

            <div className="h-60 bg-gray-200 rounded-2xl"></div>

            <div className="h-40 bg-gray-200 rounded-2xl"></div>

            <div className="h-12 bg-gray-200 rounded-xl"></div>

        </div>
    );
}