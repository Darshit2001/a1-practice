import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/ChatSlice";
import { generateRandomName, generateRandomText } from "../utils/Helper";
import ChatMessage from "./ChatMessage";

//Api Polling Method at every particular Interval
function LiveChat() {
  const Dispatch = useDispatch();
  const chatmessage = useSelector((state) => state.chat.message);
  const [state, setstate] = useState("");
  useEffect(() => {
    const l = setInterval(() => {
      // Api Polling here
      Dispatch(
        addmessage({
          name: generateRandomName(),
          message: generateRandomText(16),
        })
      );
    }, 1500);
    return () => {
      clearInterval(l);
    };
  }, []);

  //Adding UserMessage in Live Chat
  function handlechange(e) {
    e.preventDefault();
    Dispatch(
      addmessage({
        name: "Darshit Gupta",
        message: state,
      })
    );
    setstate("");
  }

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatmessage.map((e, i) => {
          return <ChatMessage key={i} name={e.name} message={e.message} />;
        })}
      </div>
      <form className="flex m-2 mr-0" target={handlechange}>
        <input
          className="px-3 w-full border border-gray-400 rounded-l-full"
          placeholder="Send a message..."
          value={state}
          onChange={(e) => {
            setstate(e.target.value);
          }}
        />
        <button
          className="w-2/12 border border-gray-400 bg-gray-200 p-2 rounded-r-full items-center"
          onClick={handlechange}
          type="submit"
        >
          <img
            className="h-5"
            src="https://icon-library.com/images/send-message-icon-png/send-message-icon-png-27.jpg"
            alt="POST"
          />
        </button>
      </form>
    </>
  );
}

export default LiveChat;
