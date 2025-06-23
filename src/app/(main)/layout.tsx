import * as React from 'react';

/**
 * This layout component is part of a route group that previously caused build conflicts.
 * By exporting a valid, minimal layout, we resolve the conflict and ensure a stable build.
 * This layout simply renders its children and does not affect the UI.
 */
export default function MainRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
