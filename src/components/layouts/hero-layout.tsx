import { cva, VariantProps } from 'class-variance-authority';import React from 'react';import { ParallaxImage } from '@/components/ui/parallax-image';import { cn } from '@/utils/cn';const layoutVariants = cva(`h-screen w-screen`, {    variants: {        variant: {            default: 'bg-background-primary',            secondary: 'bg-background-secondary',        },        size: {            padded: 'px-16 py-32',            fullscreen: '',            mobile: 'h-auto px-4 pb-16',        },    },    defaultVariants: {        variant: 'default',        size: 'padded',    },});type HeroLayoutProps = VariantProps<typeof layoutVariants> & {    img: { src: string; alt: string };};export const HeroLayout: React.FC<HeroLayoutProps> = ({    variant,    size,    img,}) => {    return (        <section className={cn(layoutVariants({ variant, size }))}>            <ParallaxImage                src={img.src}                alt={img.alt}                className={`size-full rounded-lg object-cover`}            />        </section>    );};