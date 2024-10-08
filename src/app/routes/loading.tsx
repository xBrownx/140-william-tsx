import * as React from "react";

import logo from "@/assets/large-logo.png";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { ProgressBar } from "src/components/ui/progress-bar";

const imageConfig = {
  hidden: "opacity-0",
  display: "opacity-1",
};

const frameConfig = {
  hidden: "-translate-y-full",
};

export const LoadingScreen: React.FC = () => {
  const [imgDimen, setImageDimen] = React.useState({ width: 0, height: 0 });
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
      className={`ease absolute top-0 z-50 flex h-screen w-screen items-center justify-center bg-background-primary transition-all duration-1000 ease-out
      ${transitionComplete && frameConfig.hidden}`}
    >
      <div
        className={`relative z-50 flex items-center justify-center`}
        style={{ width: `${imgDimen.width}px`, height: `${imgDimen.height}px` }}
      >
        <img
          src={logo}
          alt={"logo"}
          className={`absolute left-0 top-0 size-full 
                        ${loadingComplete ? imageConfig.display : imageConfig.hidden}`}
        />
        <ProgressBar progress={progress} loadingComplete={loadingComplete} />
      </div>
    </div>
  );
};
