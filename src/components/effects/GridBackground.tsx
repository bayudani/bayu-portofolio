"use client";

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-blue-600/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500/6 rounded-full blur-[90px]" />
    </div>
  );
}
