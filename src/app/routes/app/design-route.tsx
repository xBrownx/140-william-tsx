import * as React from 'react';import { SectionTitle } from '@/components/layouts';import { useNavigationContext } from '@/context/navigation-context';import { DesignVideo } from '@/features/design/design-video';export const DesignRoute: React.FC = () => {    const { pageRefs } = useNavigationContext();    return (        <section            className={`h-fit w-screen bg-background-secondary`}            ref={pageRefs.design}        >            <div                className={`box-border flex  flex-row gap-32 overflow-hidden px-4 pb-8 pt-32 md:px-40`}            >                <SectionTitle                    titleVariant={'light'}                    subtitle={'DESIGN'}                    title={'A memorable arrival\nexperience'}                />            </div>            <div className={'h-screen md:h-fit'}>                <DesignVideo />            </div>        </section>    );};