import { useSelector } from "react-redux";

const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) return null;
    
    return (
        <div className="p-4 w-1/5 shadow-sm">
            <ul className="border-b-[1px] border-gray-400 px-3">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Short</li>
                <li className="cursor-pointer">Subscriptions</li>
            </ul>
            <h1 className="font-bold text-lg">You</h1>
            <ul className="border-b-[1px] border-gray-400 px-3">
                <li className="cursor-pointer">Your channel</li>
                <li className="cursor-pointer">History</li>
                <li className="cursor-pointer">Your videos</li>
                <li className="cursor-pointer">Watch later</li>
            </ul>
            <h1 className="font-bold text-lg">Explore</h1>
            <ul className="border-b-[1px] border-gray-400 px-3">
                <li className="cursor-pointer">Trending</li>
                <li className="cursor-pointer">Shopping</li>
                <li className="cursor-pointer">Music</li>
                <li className="cursor-pointer">Movie</li>
                <li className="cursor-pointer">Gaming</li>
                <li className="cursor-pointer">News</li>
                <li className="cursor-pointer">Sport</li>
            </ul>
        </div>
    );
};

export default SideBar;
