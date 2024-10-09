import * as React from 'react';

import logo from '@/assets/large-logo.png';
import { fadeInOut, swipeInOutUp } from '@/components/configs';
import { useLoadingTransition } from '@/hooks/use-loading-transition';
import { ProgressBar } from 'src/components/ui/progress-bar';
import { useInitialLoadContext } from '@/context/initial-load-context';


export const LoadingScreen: React.FC = () => {
    const [imgDimen, setImageDimen] = React.useState({ width: 0, height: 0 });
    const {isLoadComplete} = useInitialLoadContext();

    const { progress, transitionComplete, loadingComplete } =
        useLoadingTransition();

    React.useEffect(() => {
        function getImageWidthAndHeight(img: HTMLImageElement) {
            setImageDimen({ width: img.width, height: img.height });
        }

        const myLogo = new Image();
        myLogo.onload = () => getImageWidthAndHeight(myLogo);
        myLogo.src = logo;
    });

    return (
        <div
            className={`absolute top-0 z-50 flex h-screen w-screen items-center justify-center bg-background-primary transition-all duration-1000 ease-out
      ${isLoadComplete && swipeInOutUp.hide}`}
        >
            <div
                className={`relative z-50 flex items-center justify-center`}
                style={{
                    width: `${imgDimen.width}px`,
                    height: `${imgDimen.height}px`,
                }}
            >
                <img
                    src={logo}
                    alt={'logo'}
                    className={`absolute left-0 top-0 size-full 
                        ${loadingComplete ? fadeInOut.show : fadeInOut.hide}`}
                />
                <ProgressBar
                    progress={progress}
                    loadingComplete={loadingComplete}
                />
            </div>
        </div>
    );
};
