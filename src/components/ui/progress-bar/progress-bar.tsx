import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

const Progress = ProgressPrimitive.Root;
const ProgressIndicator = ProgressPrimitive.Indicator;

const progressConfig = {
  hidden: "opacity-0",
  display: "opacity-1",
};

type ProgressBarProps = {
  progress: number;
  loadingComplete: boolean;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  loadingComplete,
}) => {
  return (
    <Progress
      className={`absolute z-50 size-full overflow-hidden transition-opacity duration-1000
                ${loadingComplete ? progressConfig.hidden : progressConfig.display}`}
    >
      <ProgressIndicator
        style={{ width: `${progress}%` }}
        className="z-50 h-full bg-progress duration-700 ease-in-out"
      />
    </Progress>
  );
};
