/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ChatMassage from "./ChatMassage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/chatSLice";
import { generateRandomMassage, generateRandomName } from "../Utils/randomDataForLiveChat";

const LiveChat = () => {
    const dispatch = useDispatch();

    const chats = useSelector((store) => store.message.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomMassage(),
                })
            );
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="w-full">
            <h1 className="border border-gray-400 rounded-t-lg p-3 text-lg">Live chat</h1>
            {chats.map((chat, index) => (
                <ChatMassage key={index} name={chat.name} message={chat.message} />
            ))}
        </div>
    );
};

export default LiveChat;
