
import * as React from 'react';

// This layout is intentionally left without a default export to resolve a routing conflict.
// The main root layout is in `src/app/layout.tsx`.
const PlaceholderMainLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};
