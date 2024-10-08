import { landingConst } from "@/app/constants";
import { landingAssets } from "@/assets";
import Video from "@/components/ui/video/video";

export const LandingRoute = () => {
    const bgVideo = landingAssets.vid["background-video"];
    return (
        <>
            <div className="w-screen h-screen max-w-screen max-h-screen px-0 overflow-hidden flex justify-center align-middle">
                <Video
                    options={{
                        src: bgVideo.src,
                        controls: false,
                        autoplay: true,
                        loop: true
                    }}
                >
                    <div className="absolute w-full h-full flex justify-center align-middle z-10 fit">
                        <p className="h-min" >{landingConst.heading[0].title}</p>
                    </div>
                </Video>
            </div>
        </>
);
}