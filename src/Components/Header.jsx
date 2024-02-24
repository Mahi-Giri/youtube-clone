/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { toggleMenu } from "../Redux/appSlice";
import { HAMBURGER_ICON, SEARCH_LOGO, USER_ICON, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../Utils/constant";
import { useDispatch } from "react-redux";

const Header = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => getSearchSuggestions(), 200);
        return () => {
            clearTimeout(timer);
        };
    }, [search]);

    const getSearchSuggestions = async () => {
        const response = await fetch(YOUTUBE_SEARCH_API + search);
        const data = await response.json();
        setSuggestions(data[1]);
    };

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <header>
            <div className="flex justify-between items-center px-4 py-2">
                <div className="flex gap-3">
                    <img
                        onClick={toggleMenuHandler}
                        className="w-8 h-8 cursor-pointer hover:bg-gray-200 hover:rounded-2xl p-1"
                        src={HAMBURGER_ICON}
                        alt="hamburger_icon"
                    />
                    <a href="/">
                        <img className="w-18 h-7 m-auto" src={YOUTUBE_LOGO} alt="logo" />
                    </a>
                </div>
                <div>
                    <div className="flex gap-2">
                        <input
                            className="border border-gray-300 w-[600px] h-8 rounded-2xl outline-blue-400 pl-3 pr-16 text-sm"
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="relative right-16 text-sm pr-4 rounded-r-2xl bg-gray-100 border border-gray-300 pl-4 hover:bg-gray-200">
                            <img className="w-6 h-6" src={SEARCH_LOGO} alt="" />
                        </button>
                    </div>
                </div>
                <div>
                    <img className="m-auto w-10 h-10" src={USER_ICON} alt="User-Icon" />
                </div>
            </div>
            <div className="shadow-xl rounded-xl left-[41rem] bg-gray-100 w-[30%] absolute max-h-[29%] overflow-auto">
                {suggestions &&
                    suggestions.map((item, index) => (
                        <ul key={index} className="p-1">
                            <li className="flex py-1 cursor-pointer hover:bg-gray-300">
                                <img className="w-7 h-7 text-center" src={SEARCH_LOGO} alt="logo" />
                                <p className="px-2 py-0">{item}</p>
                            </li>
                        </ul>
                    ))}
            </div>
        </header>
    );
};

export default Header;
