import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gradient-bg flex min-h-screen items-center justify-center p-4">
      <div className="orb -left-32 top-20 h-96 w-96 bg-violet-500" />
      <div className="orb -right-32 bottom-20 h-80 w-80 bg-amber-400" />
      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
              <span className="font-bold text-white">C</span>
            </div>
            <span className="font-display text-2xl font-bold">{APP_NAME}</span>
          </Link>
        </div>
        <div className="glass-card p-8">{children}</div>
      </div>
    </div>
  );
}
