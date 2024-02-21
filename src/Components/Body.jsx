import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
    return (
        <div className="flex border">
            <SideBar />
            <MainContainer />
        </div>
    );
};

export default Body;
