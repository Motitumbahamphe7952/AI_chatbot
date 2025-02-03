import React from "react";

const ChatMessage = ({ text, sender }) => {
  return (
    <div className={`flex items-center mb-2 ${sender === "user" ? "justify-end" : "justify-start"}`}>
      {sender === "bot" && <span className="mr-2 text-3xl">🤖</span>}
      <div
        className={`p-3 rounded-lg max-w-xs ${
          sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {text}
      </div>
      {sender === "user" && <span className="ml-2 text-3xl">🧑</span>}
    </div>
  );
};

export default ChatMessage;
