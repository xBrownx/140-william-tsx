import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from "react";

const Progress = ProgressPrimitive.Root;
const ProgressIndicator = ProgressPrimitive.Indicator;

const progressConfig = {
    hidden: "opacity-0",
    display: "opacity-1"
}

type ProgressBarProps = {
    progress: number;
    loadingComplete: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({progress, loadingComplete}) => {

    return (
        <Progress
            className={
                `absolute transition-opacity duration-1000 h-full w-full overflow-hidden z-50
                ${loadingComplete ? progressConfig.hidden : progressConfig.display}`
            }
        >
            <ProgressIndicator
                style={{width: `${progress}%`}}
                className="h-full duration-700 ease-in-out bg-progress z-50" />
        </Progress>
    );
}