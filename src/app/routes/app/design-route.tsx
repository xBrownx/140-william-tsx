import * as React from 'react';import { designAssets as ASSETS } from '@/assets';import { useNavigationContext } from '@/context/navigation-context';import { designConst as CONST } from 'src/constants';export const DesignRoute: React.FC = () => {    const { pageRefs } = useNavigationContext();    return (        <section className={`h-screen w-screen`} ref={pageRefs.design}>            <div                className={`box-border flex size-full flex-row gap-32 overflow-hidden px-40 py-32`}            ></div>        </section>    );};