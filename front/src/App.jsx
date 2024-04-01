import React from "react";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
