import * as React from "react";
export const useLoadingTransition = () => {
  const [progress, setProgress] = React.useState(0);
  const [transitionComplete, setTransitionComplete] = React.useState(false);
  const [loadingComplete, setLoadingComplete] = React.useState(false);

  const endTransition = () => {
    console.log("endingTransition");
    setTimeout(() => setLoadingComplete(true), 1000);
    setTimeout(() => setTransitionComplete(true), 3500);
  };

  React.useEffect(() => {
    console.log(" starting useEffect");
    let x = 0;
    const interval = setInterval(() => {
      console.log(`x == ${x}`);
      setProgress((prevState) => {
        x = prevState + 25;
        console.log(`x == ${x}`);
        if (x >= 100) {
          x = 100;
          endTransition();
          clearInterval(interval);
        }
        return x;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return { progress, transitionComplete, loadingComplete };
};
