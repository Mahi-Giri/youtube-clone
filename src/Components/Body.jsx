import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
    return (
        <div className="flex justify-between px-4 gap-1">
            <SideBar />
            <MainContainer />
        </div>
    );
};

export default Body;
