import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [video, setvideo] = useState([]);

    useEffect(() => {
        getVideo();
    }, []);

    const getVideo = async () => {
        const response = await fetch(YOUTUBE_VIDEO_API);
        const data = await response.json();
        setvideo(data?.items);
    };

    return (
        <div className="flex gap-4 flex-wrap">
            {video.map((item) => (
                <Link to={"/watch?v=" + item.id}>
                    <VideoCard key={item?.id} info={item} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
