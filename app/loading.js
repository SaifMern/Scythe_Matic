export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-3xl space-y-6 text-center">
        <div className="mx-auto h-16 w-16 animate-pulse rounded-2xl bg-primary/20" />
        <div className="mx-auto h-5 w-36 animate-pulse rounded-full bg-white/10" />
        <div className="mx-auto h-10 w-full max-w-xl animate-pulse rounded-2xl bg-white/10" />
        <div className="mx-auto h-4 w-full max-w-md animate-pulse rounded-full bg-white/10" />
        <div className="mx-auto h-4 w-full max-w-sm animate-pulse rounded-full bg-white/10" />
      </div>
    </div>
  );
}
