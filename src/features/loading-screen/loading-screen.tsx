import * as React from 'react';import logo from '@/assets/large-logo.png';import logoText from '@/assets/logo_text isolated.svg';import { fadeInOut, swipeInOutUp } from '@/components/configs';import { ProgressBar } from '@/components/ui/progress-bar';import { useInitialLoadContext } from '@/context/initial-load-context';import { cn } from '@/utils/cn';export const LoadingScreen: React.FC = () => {    const { isLoadComplete, transitionComplete, progressPercent } =        useInitialLoadContext();    return (        <div            className={`absolute top-0 z-50 flex h-screen flex-col items-center justify-center bg-background-secondary transition-all duration-1000 ease-out md:w-screen            ${transitionComplete && swipeInOutUp.hide}`}        >            <div                className={`relative z-50 box-border flex size-16 h-24 w-full flex-col items-center justify-center gap-2 overflow-hidden md:h-[8.5rem] md:w-[32.6875rem]`}            >                <img                    src={logo}                    alt={'logo'}                    className={`absolute left-0 top-0 flex size-full px-8 md:flex md:px-0                        ${isLoadComplete ? fadeInOut.show : fadeInOut.hide}`}                />                <ProgressBar />            </div>            <div className={'relative'}>                <p                    className={cn(                        'absolute font-primaryLight text-[64px] font-light text-[#ded9d0] transition-opacity duration-1000 justify-center w-full text-center',                        isLoadComplete ? fadeInOut.hide : fadeInOut.show,                    )}                >                    {progressPercent}%                </p>                <div                    className={cn(                        'relative inset-0 pt-16 transition-opacity duration-1000 delay-1000 px-6',                        isLoadComplete ? fadeInOut.show : fadeInOut.hide,                    )}                >                    <img src={logoText} alt={'140-william-street'} />                </div>            </div>        </div>    );};