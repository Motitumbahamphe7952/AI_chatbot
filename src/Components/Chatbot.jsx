// import React, { useState } from "react";
// import ChatMessage from "./ChatMessage";
// import axios from "axios";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async() => {
//     if (input.trim() === "") return;
//     const userMessage =  { text: input, sender: "user" };
//     setMessages([...messages,userMessage]);

//     try {
//       const response = await axios.post("http://localhost:5000/chat", {
//         message: input,
//       });

//       const botMessage = { sender: "bot", text: response.data.botReply };
//       setMessages([...messages, userMessage, botMessage]);
//     } catch (error) {
//       setMessages([...messages, userMessage, { sender: "bot", text: "Error processing request" }]);
//     }

//     setInput("");
//   };


//   return (
//     <div className="w-[80%] mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg">
//     <div className="h-[500px] overflow-y-auto border-b p-4">
//         {messages.map((msg, index) => (
//           <ChatMessage key={index} text={msg.text} sender={msg.sender} />
//         ))}
//     </div>
//         <div className="flex mt-4">
//         <input
//           type="text"
//           className="flex-1 border rounded-l p-3"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r text-lg">
//           🚀
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

import React, { useState } from "react";
import axios from "axios";
import ChatMessage from "./ChatMessage"; // Ensure this component exists

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post("https://ai-chatbot-backend-gamma.vercel.app/chat", {
        message: input,
      });

      const botMessage = { sender: "bot", text: response.data.botReply };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error from API:", error.response?.data || error.message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Error processing request" },
      ]);
    }

    setInput(""); // Reset input after sending message
  };

  return (
    <div className=" w-full max-w-[90%] mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg flex flex-col h-[80vh]">
      {/* Chat Message Container */}
      <div className="h-full overflow-y-auto border-b p-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      {/* Input Field and Send Button */}
      <div className="flex mt-4 items-center">
        <input
          type="text"
          className="flex-1 border rounded-l p-3 focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-3 rounded-r text-lg hover:bg-blue-600 
             sm:px-6 sm:py-3 md:text-xl lg:px-8 lg:py-4"
        >
          🚀
        </button>
      </div>
    </div>
  );
};

export default Chatbot;



// 1. Function Declaration

// const sendMessage = async() => {
// The function sendMessage is declared as an asynchronous function using the async keyword.
//  This allows the function to use await to handle asynchronous operations, such as making network requests.


// 2. Input Validation
// 
// if (input.trim() === "") return;
// This line checks if the input is empty or contains only whitespace.
// input.trim() removes any leading or trailing spaces.
// If the input is empty, the function returns immediately, preventing unnecessary processing.


// 3. Creating a User Message Object

// const userMessage =  { text: input, sender: "user" };
// A JavaScript object userMessage is created to represent the message from the user.
// It contains:
// text: input → The message typed by the user.
// sender: "user" → Specifies that the sender is the user.


// 4. Updating the State with User Message

// setMessages([...messages, userMessage]);
// setMessages updates the state (messages) with the new user message.
// The spread operator (...messages) ensures that the previous messages are retained, and userMessage is added to the list.
// This allows the UI (e.g., a chat window) to immediately display the user's message.


// 5. Sending the Message to the Server

// try {
//   const response = await axios.post("http://localhost:5000/chat", {
//     message: input,
//   });
// try { ... } catch { ... } → Used for handling errors that may occur during the request.

// axios.post("http://localhost:5000/chat", { message: input }):

// Sends an HTTP POST request to http://localhost:5000/chat.
// The request sends the user's message (input) as JSON data to the backend.
// await keyword:

// This pauses the function execution until the server responds.
// The response is stored in the response variable.


// 6. Receiving and Storing the Bot's Response

// const botMessage = { sender: "bot", text: response.data.botReply };
// setMessages([...messages, userMessage, botMessage]);
// The botMessage object stores the chatbot's response:

// sender: "bot" → Identifies that the message is from the bot.
// text: response.data.botReply → Extracts the bot's reply from the server response.
// setMessages([...messages, userMessage, botMessage]);

// Updates the messages state to include both the user's message and the bot's response.
// This ensures that both messages appear in the chat UI.


// 7. Handling Errors

// } catch (error) {
//   setMessages([...messages, userMessage, { sender: "bot", text: "Error processing request" }]);
// }
// If the request fails (e.g., server is down, network issue), the catch block runs.
// It appends an error message from the bot to messages, so the user knows something went wrong.
// 8. Clearing the Input Field
// javascript
// Copy
// Edit
// setInput("");
// After sending the message, setInput("") clears the input field so the user can type a new message.
// Summary
// This function:

// Checks if the input is empty and returns early if it is.
// Creates a user message object and adds it to the chat.
// Sends the message to the backend server using axios.post().
// Waits for the bot's response and adds it to the chat.
// Handles errors gracefully by showing an error message.
// Clears the input field for the next message.