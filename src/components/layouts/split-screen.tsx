import { cva, VariantProps } from 'class-variance-authority';import React, { PropsWithChildren } from 'react';import { ParallaxFadeIn } from '@/components/ui/parallax';import { cn } from '@/utils/cn';const sectionVariants = cva(    [        'flex',        'md:min-h-screen',        'w-screen',        'items-center',        'justify-center',        'md:py-16',        'pt-16',    ],    {        variants: {            background: {                default: 'bg-background-primary',                primary: 'bg-background-primary',                secondary: 'bg-background-secondary',            },        },        defaultVariants: {            background: 'default',        },    },);const splitVariants = cva(    [        'box-border',        'flex',        'md:h-[50.875rem]',        'md:w-[70rem]',        'md:gap-32',        'md:flex-row',        'flex-col',        'gap-8',    ],    {        variants: {            order: {                hero: '',            },        },        defaultVariants: {            order: 'hero',        },    },);type SplitScreenProps = VariantProps<typeof sectionVariants> &    PropsWithChildren &    VariantProps<typeof splitVariants> & {        pageRef: React.LegacyRef<HTMLElement>;    };export function SplitScreen({    background,    order,    pageRef,    children,}: SplitScreenProps) {    return (        <section className={cn(sectionVariants({ background }))} ref={pageRef}>            <ParallaxFadeIn>                <div className={cn(splitVariants({ order }))}>{children}</div>            </ParallaxFadeIn>        </section>    );}SplitScreen.LeftContent = function LeftContent({    children,}: PropsWithChildren) {    return (        <div className={`order-2 size-full flex-1 md:order-1`}>{children}</div>    );};SplitScreen.RightContent = function RightContent({    children,}: PropsWithChildren) {    return (        <div className={`order-1 size-full flex-1 md:order-2`}>{children}</div>    );};SplitScreen.displayName = 'SplitScreen';