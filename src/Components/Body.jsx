import { Outlet } from "react-router";
import SideBar from "./SideBar";

const Body = () => {
    return (
        <div className="flex px-4 gap-1">
            <SideBar />
            <Outlet />
        </div>
    );
};

export default Body;
