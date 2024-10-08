import { landingConst } from '@/app/constants';
import { landingAssets } from '@/assets';
import Video from '@/components/ui/video/video';

export const LandingRoute = () => {
	const bgVideo = landingAssets.vid['background-video'];
	return (
		<>
			<div className="max-w-screen flex h-screen max-h-screen w-screen justify-center overflow-hidden px-0 align-middle">
				<Video
					options={{
						src: bgVideo.src,
						controls: false,
						autoplay: true,
						loop: true,
					}}
				>
					<div className="absolute z-10 flex size-full justify-center align-middle">
						<p className="h-min">{landingConst.heading[0].title}</p>
					</div>
				</Video>
			</div>
		</>
	);
};
