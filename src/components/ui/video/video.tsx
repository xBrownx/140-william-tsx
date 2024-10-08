import * as React from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import { Player } from "videojs";

interface IVideoPlayerProps {
    options: videojs.PlayerOptions;
    children?: React.ReactNode;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({options, children}) => {
    const videoRef = React.useRef<any>(null);
    const playerRef = React.useRef<videojs.Player>(null);


    const configuredOptions = {
        autoplay: true,
        controls: options.controls,
        loop: options.loop,
        muted: options.muted,
        fluid: true,
        responsive: true,
        height: "100%",
        width: "100%",
        preload: "auto",
        enableSmoothSeeking: true,
        poster: options.poster,
        sources: [{
            src: options.src,
            type: 'application/x-mpegURL'
        }],
    };

    const handlePlayerReady = (p: videojs.Player) => {
        playerRef.current = p;

        // You can handle player events here, for example:
        p.on('waiting', () => {
            videojs.log('player is waiting');
        });

        p.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    React.useEffect(() => {
        if (!playerRef.current) {
            // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoElement.classList.add('w-full');
            videoElement.classList.add('h-full');
            videoElement.classList.add('object-cover');
            videoElement.classList.add('relative');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, configuredOptions, () => {
                handlePlayerReady(player);
            });

            // You could update an existing player in the `else` block here
            // on prop change, for example:
        } else {
            const player = playerRef.current;
            player.autoplay(configuredOptions.autoplay);
            player.src(configuredOptions.sources);
        }

    }, [configuredOptions, videoRef]);

     // Dispose the Video.js player when the functional component unmounts
    React.useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);


    return (
        <div data-vjs-player className="w-full h-full">
            <div ref={videoRef} className="relative w-full h-full object-cover">
                {children}
            </div>
        </div>
    );
};

export default VideoPlayer;
