import React from 'react';import { AppRoot } from '@/app/routes/app/root';import { LoadingScreen } from '@/app/routes/loading';import { HeaderLayout } from '@/components/layouts';export const AppRouter = () => {    return (        <>            <HeaderLayout />            {/*<LoadingScreen />*/}            <AppRoot />        </>    );};