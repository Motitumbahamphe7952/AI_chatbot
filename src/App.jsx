import React from "react";
import Navbar from "./Components/Navbar";
import Chatbot from "./Components/Chatbot";

const App = () => {
  return (
    <>
    <div className="h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-grow justify-center items-center overflow-hidden">
        <Chatbot />
      </div>
    </div>
    </>
  );
};

export default App;

