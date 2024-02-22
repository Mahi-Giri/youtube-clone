const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;
    const { viewCount } = statistics;

    const convertView = () => {
        // return viewCount <= 999 ? viewCount : (viewCount / 100000).toFixed(1);
    };

    return (
        <div className="w-80 mt-8 cursor-pointer">
            <div>
                <img className="rounded-lg" src={thumbnails?.medium?.url} alt="Thumbnail" />
            </div>
            <div className="py-2 px-5">
                <h2 className="font-bold">{title}</h2>
                <h3 className="text-gray-800 text-sm">{channelTitle}</h3>
                <span className="text-gray-800 text-sm">{viewCount} views</span>
            </div>
        </div>
    );
};

export default VideoCard;
