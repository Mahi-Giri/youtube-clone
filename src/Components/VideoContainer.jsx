import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
    const [video, setvideo] = useState([]);

    useEffect(() => {
        getVideo();
    }, []);

    const getVideo = async () => {
        const response = await fetch(YOUTUBE_VIDEO_API);
        const data = await response.json();
        console.log(data?.items);
        setvideo(data?.items);
    };

    return (
        <div className="flex gap-4 flex-wrap">
            {video.map((item) => (
                <VideoCard key={item?.id} info={item} />
            ))}
        </div>
    );
};

export default VideoContainer;
