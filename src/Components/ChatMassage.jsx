import { USER_ICON } from "../Utils/constant";

const ChatMassage = ({ name, message }) => {
    return (
        <div className="px-4 overflow-hidden">
            <div className="flex items-start gap-3">
                <img className="w-7 h-7 mt-2 rounded-full" src={USER_ICON} alt="" />
                <p className="py-1 mt-1 text-gray-600">{name}:</p>
                <p className="py-1 mt-1">{message}</p>
            </div>
        </div>
    );
};

export default ChatMassage;
