import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { Flex, VStack, Text, Box, Divider } from "@chakra-ui/react";

export default function LiveStream() {
    const videoRef = useRef(null);
    const src = "https://livepeercdn.com/hls/53e690ub3ujdh8cn/index.m3u8";

    useEffect(() => {
        let hls;
        if (videoRef.current) {
            const video = videoRef.current;

            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                // Some browers (safari and ie edge) support HLS natively
                video.src = src;
            } else if (Hls.isSupported()) {
                // This will run in all other modern browsers
                hls = new Hls();
                hls.loadSource(src);
                hls.attachMedia(video);
            } else {
                console.error(
                    "This is a legacy browser that doesn't support MSE"
                );
            }
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [videoRef]);

    return (
        <Flex justifyContent={"center"}>
            <VStack p={"10"}>
                <Box p={10}>
                    <Text textStyle={"h2"} as="u">
                        Enjoy our Live Stream!
                    </Text>
                    <Text p={1}>Powered by LivePeer</Text>
                </Box>

                <Box
                    border={"4px"}
                    borderRadius={"xl"}
                    borderColor={"blue.200"}
                    w={"100%"}
                    m={36}
                >
                    <video controls ref={videoRef} style={{ width: "100%" }} />
                </Box>
            </VStack>
        </Flex>
    );
}
