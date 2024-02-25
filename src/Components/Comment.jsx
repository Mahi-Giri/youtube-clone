import { USER_ICON } from "../Utils/constant";

const Comment = ({ data }) => {
    const { name, text } = data;

    return (
        <div className="flex rounded-lg bg-gray-100 my-2">
            <img className="w-12 h-12" src={USER_ICON} alt="user" />
            <div className="ml-2">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Comment;
