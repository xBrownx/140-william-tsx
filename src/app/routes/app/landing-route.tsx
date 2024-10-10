import { landingAssets } from '@/assets';import Video from '@/components/ui/video/video';import { useNavigationContext } from '@/context/navigation-context';import { landingConst } from 'src/constants';export const LandingRoute = () => {    const { pageRefs, navigateToPage } = useNavigationContext();    const bgVideo = landingAssets.vid['background-video'];    return (        <section ref={pageRefs.landing} className={`overflow-x-hidden`}>            <div className="relative box-border flex h-screen max-h-screen w-screen justify-center overflow-hidden px-0 align-middle">                <Video                    options={{                        src: bgVideo.src,                        controls: false,                        autoplay: true,                        loop: true,                        muted: true,                    }}                >                    <div className="absolute bottom-0 z-10 flex h-fit w-[1120px] flex-col justify-center gap-4 pb-8 pl-8 align-middle">                        <h1 className="text-right font-primaryLight text-[138px] font-light uppercase leading-[128px] text-[#d9d9d9]/50">                            {landingConst.title[0].title}                        </h1>                        <h1 className="font-primaryLight text-[138px] font-light uppercase leading-[128px] text-[#d9d9d9]/50">                            {landingConst.title[1].title}                        </h1>                        <h1 className="text-right font-primaryLight text-[138px] font-light uppercase leading-[128px] text-[#d9d9d9]/50">                            {landingConst.title[2].title}                        </h1>                    </div>                    <div                        className={`absolute bottom-0 right-0 z-10 flex h-fit p-8`}                    >                        <button                            onClick={() => navigateToPage('home')}                            className={                                "group relative flex w-fit overflow-hidden rounded-lg border border-white bg-transparent after:absolute after:inset-x-0 after:-top-full after:bottom-full after:z-[-1] after:block after:bg-button-primary after:px-2 after:py-4 after:transition-all after:duration-300 after:content-[''] hover:bg-transparent hover:after:inset-x-0 after:hover:bottom-0 hover:after:top-0"                            }                        >                            <img                                src={                                    'https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/down-arrow.svg'                                }                                alt="down-arrow"                            />                        </button>                    </div>                </Video>            </div>        </section>    );};