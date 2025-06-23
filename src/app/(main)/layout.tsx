
import * as React from 'react';

/**
 * This layout component is part of a route group that was causing build conflicts.
 * It is now a valid, minimal component to ensure build stability.
 * This file can be ignored.
 */
export default function MainRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
