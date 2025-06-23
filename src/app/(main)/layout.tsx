
import * as React from 'react';

/**
 * This layout component was part of a route group that was causing build conflicts.
 * It is now an inert, non-exported component to ensure build stability.
 * This file can be ignored.
 */
function MainRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
