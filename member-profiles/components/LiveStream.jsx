import { Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function LiveStream() {
    const videoRef = useRef(null);

    // useEffect(() => {
    //     if (videoRef.current) {
    //         videojs(videoRef.current, {
    //             sources: [
    //                 {
    //                     src: "rtmp://rtmp.livepeer.com/live",
    //                     type: "application/x-mpegURL",
    //                 },
    //             ],
    //         });
    //     }
    // });

    return (
        <div>
            {/* <video
                controls
                ref={videoRef}
                className="video-js vjs-big-play-centered"
            />

            <iframe
                src="https://lvpr.tv?v=53e6-w2yw-35pf-ko4x"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; encrypted-media; picture-in-picture"
                sandbox="allow-scripts"
            ></iframe> */}
        </div>
    );
}