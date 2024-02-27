import { useEffect, useState } from "react";
import { TITLE, YOUTUBE_VIDEO_API } from "../Utils/constant";
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
            {video.map((item) => {
                TITLE[item.id] = {
                    title: item.snippet.title,
                    channelTitle: item.snippet.channelTitle,
                    likeCount: item.statistics.likeCount,
                };

                return (
                    <Link key={item.id} to={"/watch?v=" + item.id}>
                        <VideoCard info={item} />
                    </Link>
                );
            })}
        </div>
    );
};

export default VideoContainer;
