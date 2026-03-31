export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border-2 border-border border-t-primary animate-spin" />
    </div>
  );
}
