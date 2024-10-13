import React, { lazy, Suspense } from 'react';import { ErrorBoundary } from 'react-error-boundary';import { heroAssets } from '@/assets/';import { HeaderLayout } from '@/components/layouts';import { FooterLayout } from '@/components/layouts/footer-layout';import { HeroLayout } from '@/components/layouts/hero-layout';import { ScrollingText } from '@/components/layouts/scrolling-text';import { Spinner } from '@/components/ui/spinner';import { useInitialLoadContext } from '@/context/initial-load-context';import { useMobile } from '@/hooks/use-mobile';const AgencyRoute = lazy(() =>    import('./agency-route').then(({ AgencyRoute }) => ({        default: AgencyRoute,    })),);const AmenitiesRoute = lazy(() =>    import('./amenities-route').then(({ AmenitiesRoute }) => ({        default: AmenitiesRoute,    })),);const AvailabilityRoute = lazy(() =>    import('./availability-route').then(({ AvailabilityRoute }) => ({        default: AvailabilityRoute,    })),);const DesignRoute = lazy(() =>    import('./design-route').then(({ DesignRoute }) => ({        default: DesignRoute,    })),);const EnquireRoute = lazy(() =>    import('./enqiure-route').then(({ EnquireRoute }) => ({        default: EnquireRoute,    })),);const GalleryRoute = lazy(() =>    import('./gallery-route').then(({ GalleryRoute }) => ({        default: GalleryRoute,    })),);const HistoryRoute = lazy(() =>    import('./history-route').then(({ HistoryRoute }) => ({        default: HistoryRoute,    })),);const HomeRoute = lazy(() =>    import('./home-route').then(({ HomeRoute }) => ({        default: HomeRoute,    })),);const LandingRoute = lazy(() =>    import('./landing-route').then(({ LandingRoute }) => ({        default: LandingRoute,    })),);const LifestyleRoute = lazy(() =>    import('./lifestyle-route').then(({ LifestyleRoute }) => ({        default: LifestyleRoute,    })),);const LocationRoute = lazy(() =>    import('./location-route').then(({ LocationRoute }) => ({        default: LocationRoute,    })),);const ThirdspaceRoute = lazy(() =>    import('./thirdspace-route').then(({ ThirdspaceRoute }) => ({        default: ThirdspaceRoute,    })),);export const AppRoot = () => {    const { transitionComplete } = useInitialLoadContext();    const isMobile = useMobile();    const Landing = React.useMemo(() => <LandingRoute />, []);    const Home = React.useMemo(() => <HomeRoute />, []);    const Lifestyle = React.useMemo(() => <LifestyleRoute />, []);    const Design = React.useMemo(() => <DesignRoute />, []);    const Amenities = React.useMemo(() => <AmenitiesRoute />, []);    const Thirdspace = React.useMemo(() => <ThirdspaceRoute />, []);    const Location = React.useMemo(() => <LocationRoute />, []);    const Availability = React.useMemo(() => <AvailabilityRoute />, []);    const History = React.useMemo(() => <HistoryRoute />, []);    const Gallery = React.useMemo(() => <GalleryRoute />, []);    const Agency = React.useMemo(() => <AgencyRoute />, []);    const Enquire = React.useMemo(() => <EnquireRoute />, []);    return (        <>            <HeaderLayout />            <Suspense                fallback={                    <div className="flex size-full items-center justify-center">                        <Spinner size="xl" />                    </div>                }            >                <ErrorBoundary fallback={<div>Something went wrong!</div>}>                    {Landing}                    {transitionComplete && (                        <>                            {Home}                            <HeroLayout                                variant={'default'}                                size={isMobile ? 'mobile' : 'padded'}                                img={heroAssets.img['hero-one']}                            />                            {Lifestyle}                            <HeroLayout                                variant={'default'}                                size={isMobile ? 'mobile' : 'padded'}                                img={heroAssets.img['hero-two']}                            />                            {Design}                            {Amenities}                            {Thirdspace}                            {Location}                            {Availability}                            {History}                            <HeroLayout                                variant={'default'}                                size={isMobile ? 'mobile-full' : 'fullscreen'}                                img={heroAssets.img['hero-three']}                            />                            {Gallery}                            {Agency}                            <HeroLayout                                variant={'secondary'}                                size={isMobile ? 'mobile' : 'padded'}                                img={heroAssets.img['hero-four']}                            />                            <ScrollingText />                            {Enquire}                            <FooterLayout />                        </>                    )}                </ErrorBoundary>            </Suspense>        </>    );};