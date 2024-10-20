import * as React from 'react';import { availabilityAssets as ASSETS } from '@/assets';import {    levelConfig,    LevelConfigKey,    tenancyConfig,    TenancyConfigKey,} from '@/config';import { NavMobile } from '@/features/availability/components/nav';import { useAvailabilityContext } from '@/features/availability/context/availability-context';import { cn } from '@/utils/cn';const vectorAssets = ASSETS.img['tenancy-vectors'];const thirdspaceImages = ASSETS.img['third-space'];type DetailsRowProps = {    isSpecial?: boolean | false;    name: string;    value: string;};type ModalProps = {    children?: React.ReactNode;};const MobileDetailsRow: React.FC<DetailsRowProps> = ({    isSpecial,    name,    value,}) => {    return (        <div className={`flex flex-row gap-8`}>            <p                className={                    'w-[150px] font-secondaryLight text-sm font-light text-white'                }            >                {name}            </p>            <p                className={cn(                    'font-secondaryLight text-sm font-light text-[#84936e] w-[75px]',                    isSpecial ? 'text-[#84936e]' : 'text-white',                )}            >                {value}            </p>        </div>    );};const MobileDetails = () => {    const { activeLevel } = useAvailabilityContext();    return (        <div className={`flex size-full flex-col items-center gap-4 px-4`}>            <div                className={`flex w-[257px]  flex-col gap-4 border-l border-white pl-4`}            >                <div className={`flex flex-col `}>                    <MobileDetailsRow                        isSpecial={true}                        name={'Status'}                        value={                            tenancyConfig[activeLevel as TenancyConfigKey][0]                                .status                        }                    />                    <MobileDetailsRow                        isSpecial={false}                        name={'Floor Area'}                        value={                            tenancyConfig[activeLevel as TenancyConfigKey][0]                                .floorArea                        }                    />                    <MobileDetailsRow                        isSpecial={false}                        name={'Timing'}                        value={                            tenancyConfig[activeLevel as TenancyConfigKey][0]                                .timing                        }                    />                    <MobileDetailsRow                        isSpecial={false}                        name={'Fitout'}                        value={                            tenancyConfig[activeLevel as TenancyConfigKey][0]                                .fitout                        }                    />                    <MobileDetailsRow                        isSpecial={false}                        name={'Lease Type'}                        value={                            tenancyConfig[activeLevel as TenancyConfigKey][0]                                .leaseType                        }                    />                </div>                <div className={`flex flex-col`}>                    {tenancyConfig[activeLevel as TenancyConfigKey][0]                        .paragraph && (                        <p                            className={                                'font-secondaryLight text-sm font-light text-white'                            }                        >                            {                                tenancyConfig[                                    activeLevel as TenancyConfigKey                                ][0].paragraph                            }                        </p>                    )}                    {tenancyConfig[                        activeLevel as TenancyConfigKey                    ][0].furtherDetails.map((detail) => (                        <MobileDetailsRow                            key={detail.label}                            name={detail.label}                            value={detail.value}                        />                    ))}                </div>            </div>            <button                className={`flex w-full flex-row items-center justify-center gap-2 rounded-lg border px-8 py-2`}            >                <img                    src={                        'https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/download.svg'                    }                    alt={'download-floor-plan'}                />                <p                    className={`font-secondaryLight text-base font-normal text-white`}                >                    Floor Plan                </p>            </button>        </div>    );};export const ThirdSpaceModal = () => {    return (        <div className={`flex flex-col gap-8 overflow-y-scroll px-4 pb-8`}>            <div className={`flex w-full justify-start`}>                <h1                    className={`font-primaryLight text-4xl font-light leading-[57.60px] text-white`}                >                    Level 5 Third Space                </h1>            </div>            {thirdspaceImages.map((image, index) => {                return (                    <img                        key={index}                        src={image.src}                        role={'presentation'}                        alt={''}                        className={'rounded-lg'}                    />                );            })}        </div>    );};const MobileModalBody: React.FC = () => {    const { activeLevel } = useAvailabilityContext();    if (!activeLevel) return;    return (        <div className={`flex h-full flex-col items-center gap-[39px]  py-11`}>            <div                className={                    'top-0 box-border flex h-fit w-full flex-col gap-4 pt-[46px]'                }            >                <h1                    className={`text-center font-secondaryRegular text-sm font-bold text-white`}                >                    AVAILABLE TENANCIES                </h1>                <NavMobile />            </div>            {activeLevel === 'l05' ? (                <ThirdSpaceModal />            ) : (                <>                    <div className={`flex w-full justify-start px-4`}>                        <h1                            className={`font-primaryLight text-4xl font-light leading-[57.60px] text-white`}                        >                            Level &nbsp;                            {levelConfig[activeLevel as LevelConfigKey].lvl}                        </h1>                    </div>                    <>                        <div>                            <img                                src={                                    vectorAssets[                                        activeLevel as TenancyConfigKey                                    ].src                                }                                alt={'level-floor-plan'}                                className={`flex w-full justify-start pr-10`}                            />                        </div>                        <MobileDetails />                    </>                </>            )}        </div>    );};const MobileModalFrame: React.FC<ModalProps> = ({ children }) => {    const { isModalOpen, closeModal } = useAvailabilityContext();    const [isFadeIn, setFadeIn] = React.useState(false);    React.useEffect(() => {        if (isModalOpen) {            setTimeout(() => setFadeIn(true), 100);        } else {            setFadeIn(false);        }    }, [isModalOpen]);    return (        <div            className={cn(                `z-50 fixed flex size-full flex-col rounded-lg bg-background-modal shadow-modal backdrop-blur-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500`,                isFadeIn ? 'opacity-1' : 'opacity-0',            )}        >            <button                onClick={closeModal}                className={`absolute right-0 top-0 z-30 box-border flex items-center justify-center px-8 pt-7`}            >                <img                    src={                        'https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg'                    }                    alt={'close-icon'}                    className={``}                />            </button>            <MobileModalBody />        </div>    );};export const ModalMobile: React.FC<ModalProps> = ({ children }) => {    const { isModalOpen } = useAvailabilityContext();    return (        <div            className={cn(                `fixed box-border inset-0 z-10 none`,                isModalOpen ? 'block' : 'hidden',            )}        >            <MobileModalFrame>{children}</MobileModalFrame>        </div>    );};