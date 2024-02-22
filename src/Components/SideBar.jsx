import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) return null;

    return (
        <div className="p-4 w-1/5 shadow-sm">
            <ul className="border-b-[1px] border-gray-400 px-3">
                <li className="cursor-pointer text-gray-800">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="cursor-pointer text-gray-800">Short</li>
                <li className="cursor-pointer text-gray-800">Subscriptions</li>
            </ul>
            <h1 className="font-bold text-lg">You</h1>
            <ul className="border-b-[1px] border-gray-400 px-3">
                <li className="cursor-pointer text-gray-800">Your channel</li>
                <li className="cursor-pointer text-gray-800">History</li>
                <li className="cursor-pointer text-gray-800">Your videos</li>
                <li className="cursor-pointer text-gray-800">Watch later</li>
            </ul>
            <h1 className="font-bold text-lg">Explore</h1>
            <ul className="border-b-[1px] border-gray-400 px-3">
                <li className="cursor-pointer text-gray-800">Trending</li>
                <li className="cursor-pointer text-gray-800">Shopping</li>
                <li className="cursor-pointer text-gray-800">Music</li>
                <li className="cursor-pointer text-gray-800">Movie</li>
                <li className="cursor-pointer text-gray-800">Gaming</li>
                <li className="cursor-pointer text-gray-800">News</li>
                <li className="cursor-pointer text-gray-800">Sport</li>
            </ul>
        </div>
    );
};

export default SideBar;
