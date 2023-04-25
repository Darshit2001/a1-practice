import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user"
        src="https://www.kindpng.com/picc/m/78-785917_user-login-function-name-avatar-user-icon-hd.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage;
