import Buttons from "./Buttons";

const btnList = ["All", "JavaScript", "Mixes", "Gaming", "Live", "Music", "T-Series", "Sitcoms", "Trailers", "Anime"];

const ButtonList = () => {
    return (
        <div className="flex gap-3 mt-4">
            {btnList.map((btn, index) => (
                <Buttons key={index} name={btn} />
            ))}
        </div>
    );
};

export default ButtonList;
