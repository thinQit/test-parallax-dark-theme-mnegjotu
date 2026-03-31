import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground mb-8 text-center">
        This page drifted out of orbit.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground rounded-lg px-6 py-3 uppercase tracking-wide transition-all duration-200 hover:scale-105"
      >
        Return home
      </Link>
    </div>
  );
}
