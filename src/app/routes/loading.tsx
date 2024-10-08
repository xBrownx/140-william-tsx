import * as React from "react";
import { useLoadingTransition } from "@/hooks/useLoadingTransition";
import { ProgressBar } from "@/components/ui/progressBar";
import logo from '@/assets/large-logo.png';

const imageConfig = {
    hidden: "opacity-0",
    display: "opacity-1"
}

export const LoadingScreen: React.FC = () => {
    const [imgDimen, setImageDimen] = React.useState({width: 0, height: 0});
    const { progress, transitionComplete, loadingComplete } = useLoadingTransition();

    React.useEffect(() => {
        function getImageWidthAndHeight(img: HTMLImageElement) {
            setImageDimen({width: img.width, height: img.height})
        }

        const myLogo = new Image();
        myLogo.onload = () => getImageWidthAndHeight(myLogo);
        myLogo.src = logo;
    })

    return (
        <div className="absolute w-screen h-screen z-50 top-0 flex items-center justify-center ">
            <div
                className={`relative z-50 flex items-center justify-center`}
                style={{width: `${imgDimen.width}px`, height: `${imgDimen.height}px`}}
            >
                <img
                    src={logo}
                    alt={"logo"}
                    className={
                        `absolute w-full h-full top-0 left-0 
                        ${loadingComplete ? imageConfig.display : imageConfig.hidden}`
                    }
                />
                <ProgressBar progress={progress} loadingComplete={loadingComplete} />
            </div>
        </div>
    );

}