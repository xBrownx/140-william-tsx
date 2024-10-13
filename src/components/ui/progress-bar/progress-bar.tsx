import * as ProgressPrimitive from '@radix-ui/react-progress';import * as React from 'react';const Progress = ProgressPrimitive.Root;const ProgressIndicator = ProgressPrimitive.Indicator;import { fadeInOut } from '@/components/configs';import { useInitialLoadContext } from '@/context/initial-load-context';export const ProgressBar: React.FC = () => {    const { progress, isLoadComplete } = useInitialLoadContext();    return (        <Progress            className={`absolute z-50 size-full overflow-hidden px-8 transition-opacity duration-1000 md:p-0                ${isLoadComplete ? fadeInOut.hide : fadeInOut.show}`}        >            <ProgressIndicator                style={{ width: `${progress}%` }}                className="z-50 h-full bg-progress duration-500 ease-in-out"            />        </Progress>    );};