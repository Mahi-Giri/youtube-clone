/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import { WATCH_PAGE } from "../Utils/constant";

const WatchPage = () => {
    const [search] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="mt-4 ml-28">
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
    );
};

export default WatchPage;
