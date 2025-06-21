import type { ReactNode } from 'react';

// This layout is intentionally minimal to resolve a build conflict.
export default function MinimalLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
