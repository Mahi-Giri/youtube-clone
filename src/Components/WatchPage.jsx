/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import { TITLE, WATCH_PAGE } from "../Utils/constant";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [search] = useSearchParams();

    const videoId = search.get("v");

    const title = TITLE[videoId]?.title;
    const channelTitle = TITLE[videoId]?.channelTitle;
    const likeCount = TITLE[videoId]?.likeCount;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="mx-24 w-full">
            <div className="mt-4 flex gap-3 testing">
                <div>
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
                <div className="w-96 max-h-[680px] border border-gray-300 rounded-lg overflow-auto bg-gray-100">
                    <LiveChat />
                </div>
            </div>
            <h1 className="mt-4 font-bold text-2xl">{title}</h1>
            <div className="max-w-[72%] flex justify-between py-2">
                <div>
                    <h2 className="text-xl font-bold py-2">{channelTitle}</h2>
                </div>
                <div className="flex justify-between gap-5 text-lg font-bold">
                    <button className="rounded-full bg-black text-white px-4 py-2 hover:opacity-85">Subscribe</button>
                    <button className="flex gap-2 justify-center items-center rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-300">
                        <img
                            className="w-6 h-6"
                            src="https://cdn.icon-icons.com/icons2/2640/PNG/512/heart_favourite_love_like_icon_159300.png"
                            alt="like"
                        />
                        : {(likeCount / 1000).toFixed(1)+" K"}
                    </button>
                    <button className="flex gap-2 justify-center items-center rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-300">
                        <img
                            className="w-6 h-6"
                            src="https://cdn.icon-icons.com/icons2/2819/PNG/512/love_heart_favourite_icon_179532.png"
                            alt="like"
                        />
                    </button>
                </div>
            </div>
            <CommentContainer />
        </div>
    );
};

export default WatchPage;
