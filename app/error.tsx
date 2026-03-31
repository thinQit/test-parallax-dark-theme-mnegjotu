"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Something broke in the signal.</h2>
      <p className="text-muted-foreground mb-6 text-center">
        We hit an unexpected issue. Try reloading the experience.
      </p>
      <button
        onClick={() => reset()}
        className="bg-primary text-primary-foreground rounded-lg px-6 py-3 uppercase tracking-wide transition-all duration-200 hover:scale-105"
      >
        Try again
      </button>
    </div>
  );
}
