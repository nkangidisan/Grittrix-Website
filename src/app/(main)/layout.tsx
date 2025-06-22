import * as React from 'react';

// This layout is intentionally left minimal to resolve a routing conflict.
// The main root layout is in `src/app/layout.tsx`.
export default function PlaceholderMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
