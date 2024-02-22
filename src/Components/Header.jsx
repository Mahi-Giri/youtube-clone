import { toggleMenu } from "../Redux/appSlice";
import { HAMBURGER_ICON, SEARCH_LOGO, USER_ICON, YOUTUBE_LOGO } from "../Utils/constant";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <header className="flex justify-between items-center px-4 py-2">
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
            <div className="flex gap-2">
                <input
                    className="border border-gray-300 w-[800px] h-8 rounded-2xl outline-none pl-3 pr-16  text-sm "
                    type="text"
                    placeholder="Search..."
                />
                <button className="relative right-16 text-sm pr-4 rounded-r-2xl bg-gray-100 border border-gray-300 pl-4 hover:bg-gray-200">
                    <img className="w-6 h-6" src={SEARCH_LOGO} alt="" />
                </button>
            </div>
            <div>
                <img className="m-auto w-10 h-10" src={USER_ICON} alt="User-Icon" />
            </div>
        </header>
    );
};

export default Header;
