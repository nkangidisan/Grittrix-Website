
import * as React from 'react';

/**
 * This is a pass-through layout for the (main) route group.
 * It ensures the directory is a valid route segment without adding any UI.
 * The primary layout is in `src/app/layout.tsx`.
 */
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
