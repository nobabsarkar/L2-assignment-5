"use client";

import { LandPlot } from "lucide-react";

const GlobalLoading = () => {
  return (
    <main className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Background Blur Circles */}
      <div className="absolute -left-24 top-10 h-72 w-72 animate-pulse rounded-full bg-green-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="flex h-24 w-24 animate-bounce items-center justify-center rounded-3xl bg-gradient-to-br from-green-500 to-emerald-700 shadow-2xl shadow-green-500/30">
          <LandPlot className="h-12 w-12 text-white" />
        </div>

        {/* Brand */}
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight">
          Rent<span className="text-green-600">Nest</span>
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Finding your perfect home...
        </p>

        {/* Loading Dots */}
        <div className="mt-8 flex items-center gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-green-600 [animation-delay:-0.3s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-green-600 [animation-delay:-0.15s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-green-600" />
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-green-100 dark:bg-neutral-800">
          <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-green-500 to-emerald-600" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes loading {
          0% {
            transform: translateX(-120%);
          }
          50% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(220%);
          }
        }
      `}</style>
    </main>
  );
};

export default GlobalLoading;
