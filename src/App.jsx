import React from "react";
import Navbar from "./Components/Navbar";
import Chatbot from "./Components/Chatbot";

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-grow justify-center items-center">
        <Chatbot />
      </div>
    </div>
    </>
  );
};

export default App;

