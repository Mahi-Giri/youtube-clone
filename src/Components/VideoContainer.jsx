import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideo } from "../Redux/videoSlice";

const VideoContainer = () => {
    const [video, setvideo] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getVideo();
    }, []);

    const getVideo = async () => {
        const response = await fetch(YOUTUBE_VIDEO_API);
        const data = await response.json();
        dispatch(addVideo(data?.items))
        setvideo(data?.items);
    };

    return (
        <div className="flex gap-4 flex-wrap">
            {video.map((item) => (
                <Link key={item?.id} to={"/watch?v=" + item.id}>
                    <VideoCard info={item} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;


