/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import { WATCH_PAGE } from "../Utils/constant";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
    const [search] = useSearchParams();

    // const videoTitle = useSelector((store) => store.video.videos);
    // const { title } = videoTitle[1]?.snippet;

    // const searchParams = new URLSearchParams(window.location.search);
    // const query = searchParams.get("v");
    // console.log(query);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="ml-28">
            <div className="mt-4">
                <iframe
                    className="rounded-xl"
                    width="1200"
                    height="680"
                    src={WATCH_PAGE + search.get("v") + "?&autoplay=1"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
            {/* <h1 className="mt-4 font-bold text-xl">{title}</h1> */}
            <CommentContainer />
        </div>
    );
};

export default WatchPage;
