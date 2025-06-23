import * as React from 'react';

/**
 * This layout component is part of a route group that was causing build conflicts.
 * The default export has been removed to neutralize this file from the routing system,
 * resolving the build error. This file can be ignored.
 */
function MainRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
