import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { HeaderLayout } from '@/components/layouts';
import { Spinner } from '@/components/ui/spinner';
import { usePageRef } from '@/hooks/use-page-ref';

const LandingRoute = lazy(() =>
	import('./landing-route').then(({ LandingRoute }) => ({
		default: LandingRoute,
	})),
);

export const AppRoot = () => {
	const { pageRefs, navigateTo } = usePageRef();

	return (
		<>
			<HeaderLayout pageRefs={pageRefs} navigateTo={navigateTo} />
			<Suspense
				fallback={
					<div className="flex size-full items-center justify-center">
						<Spinner size="xl" />
					</div>
				}
			>
				<ErrorBoundary fallback={<div>Something went wrong!</div>}>
					<LandingRoute />
					<LandingRoute />
				</ErrorBoundary>
			</Suspense>
		</>
	);
};
