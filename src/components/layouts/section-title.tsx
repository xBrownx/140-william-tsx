import { cva, type VariantProps } from 'class-variance-authority';import * as React from 'react';import { FadeUpParallax } from '@/components/ui/fade-up-parallax/fad-up-parallax';import { Paragraph, ParagraphProps } from '@/components/ui/paragraph';import { ParallaxTitle } from '@/components/ui/parallax-title';import { Subtitle, SubtitleProps } from '@/components/ui/subtitle';import { Title, TitleProps } from '@/components/ui/title';import { cn } from '@/utils/cn';const flexVariants = cva('', {    variants: {        variant: {            col: 'flex flex-col items-start justify-start',            row: 'flex h-[181px] flex-row justify-center md:gap-8',            mobile: 'flex flex-col gap-4 p-4',        },    },    defaultVariants: {        variant: 'col',    },});const paragraphIndentVariants = cva('', {    variants: {        indentVariant: {            default:                'inline-flex items-center justify-center border-l border-[#84936e] pb-[20px] pl-4 md:gap-2 md:pb-8 md:pl-8',            flexEnd:                ' flex w-[450px] items-end border-l border-[#84936e] md:gap-2 md:pl-8',            dark: 'inline-flex flex-col items-start justify-center border-l border-[#162425] pb-[20px] pl-4 md:gap-8 md:pb-8 md:pl-8',            'dark-no-padding':                'inline-flex flex-col items-start justify-center border-l border-[#162425] pl-4 md:gap-8 md:pl-8',        },    },    defaultVariants: {        indentVariant: 'default',    },});export type SectionTitleProps = VariantProps<typeof flexVariants> &    VariantProps<typeof paragraphIndentVariants> &    SubtitleProps &    TitleProps &    ParagraphProps & {        subtitle?: string;        title?: string;        paragraph?: string;        children?: React.ReactNode;    };export const SectionTitle: React.FC<SectionTitleProps> = ({    variant,    size,    indentVariant,    subtitleVariant,    titleVariant,    paragraphVariant,    title,    subtitle,    paragraph,    children,}) => {    return (        <div className={cn(flexVariants({ variant }))}>            <div>                {subtitle && (                    <FadeUpParallax>                        <Subtitle subtitleVariant={subtitleVariant}>                            {subtitle}                        </Subtitle>                    </FadeUpParallax>                )}                {title && (                    <ParallaxTitle>                        <Title titleVariant={titleVariant} size={size}>                            {title}                        </Title>                    </ParallaxTitle>                )}            </div>            {paragraph && (                <FadeUpParallax>                    <div                        className={cn(                            paragraphIndentVariants({ indentVariant }),                        )}                    >                        <Paragraph paragraphVariant={paragraphVariant}>                            {paragraph}                        </Paragraph>                        {children}                    </div>                </FadeUpParallax>            )}        </div>    );};