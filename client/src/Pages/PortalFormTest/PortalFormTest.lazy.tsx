import React, { lazy, Suspense } from 'react';

const LazyPortalFormTest = lazy(() => import('./PortalFormTest'));

const PortalFormTest = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPortalFormTest {...props} />
  </Suspense>
);

export default PortalFormTest;
