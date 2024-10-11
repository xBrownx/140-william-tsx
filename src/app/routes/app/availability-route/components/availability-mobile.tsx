import * as React from 'react';import { LevelButtons } from '@/app/routes/app/availability-route/components/level-buttons';import { LevelVectors } from '@/app/routes/app/availability-route/components/level-vectors';import { Modal } from '@/app/routes/app/availability-route/components/modal';import { availabilityAssets as ASSETS } from '@/assets';import { SectionTitle } from '@/components/layouts';import { Paragraph } from '@/components/ui/paragraph';import { availabilityConst as CONST } from '@/constants';import { useAvailabilityContext } from '@/context/availability-context';import { useNavigationContext } from '@/context/navigation-context';import { useMobile } from '@/hooks/use-mobile';import { useVisibleButtons } from '@/app/routes/app/availability-route/hooks/use-visible-buttons';import { cn } from '@/utils/cn';type Level = {    lvl: number;    isActive: boolean;    key: string;};type NavButtonProps = {    level: Level;};const NavButton: React.FC<NavButtonProps> = ({ level }) => {    const { activeLevel, onLevelClick } = useAvailabilityContext();    const visibleButtons = useVisibleButtons();    return (        <button            className={cn(                `size-10 rounded-lg border text-white transition-all duration-200`,                level.key === activeLevel                    ? 'bg-button-primary'                    : 'bg-transparent',                visibleButtons?.find((lvl) => lvl.key === level.key)                    ? 'w-10 mx-1 opacity-1'                    : 'w-0  opacity-0 mx-0 border-0',            )}            onClick={() => onLevelClick(level.key)}        >            {level.lvl}        </button>    );};const Buttons = () => {    const { activeLevelArray, activeLevel, navigateUp, navigateDown } =        useAvailabilityContext();    return (        <div className={`flex h-fit w-full items-center justify-center`}>            <div className={cn(`flex flex-row justify-between w-full px-4`)}>                <button                    className={cn(                        `flex items-center justify-center -rotate-90`,                        activeLevel === 'l35' ? 'opacity-0' : '',                    )}                    onClick={navigateUp}                >                    <img                        src={                            'https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg'                        }                        alt={'down-arrow'}                    />                </button>                <div>                    {activeLevelArray.map((level) => (                        <NavButton key={level.key} level={level} />                    ))}                </div>                <button                    className={cn(                        `flex rotate-90 items-center justify-center`,                        activeLevel === 'l05' ? 'opacity-0' : '',                    )}                    onClick={navigateDown}                >                    <img                        src={                            'https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg'                        }                        alt={'down-arrow'}                    />                </button>            </div>        </div>    );};export const AvailabilityMobile: React.FC = () => {    return (        <>            <div                className={`box-border h-fit w-screen bg-background-primary pb-12 pt-16`}            >                <SectionTitle                    variant={'mobile'}                    subtitleVariant={'dark'}                    indentVariant={'dark-no-padding'}                    titleVariant={'dark'}                    paragraphVariant={'dark'}                    subtitle={CONST.subtitle}                    title={CONST.title}                    paragraph={CONST.paragraph}                >                    <div className={`flex flex-col gap-4 pt-4`}>                        <div className={'flex w-fit flex-col gap-1'}>                            <img                                className={'w-fit'}                                src={ASSETS.icon['rating-two'].src}                                alt={ASSETS.icon['rating-two'].alt}                            />                            <Paragraph paragraphVariant={'dark'}>                                NABERS Energy Rating                            </Paragraph>                        </div>                        <div className={'flex w-fit flex-col gap-1'}>                            <img                                className={'w-fit'}                                src={ASSETS.icon['rating-one'].src}                                alt={ASSETS.icon['rating-one'].alt}                            />                            <Paragraph paragraphVariant={'dark'}>                                NABERS Water Rating                            </Paragraph>                        </div>                    </div>                </SectionTitle>            </div>            <div                className={`relative h-0 w-full overflow-hidden bg-availability-mobile bg-contain bg-no-repeat pt-[225.45%]`}            >                <div                    className={                        'absolute top-0 box-border flex h-fit w-full flex-col gap-4 pt-[46px]'                    }                >                    <h1                        className={`text-center font-secondaryRegular text-sm font-bold text-[#162425]/70`}                    >                        AVAILABLE TENANCIES                    </h1>                    <Buttons />                </div>            </div>        </>    );};