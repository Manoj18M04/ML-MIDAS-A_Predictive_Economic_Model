import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <>
      <div className="bg-[#F8EED5]">
        <div
          className={`bg-[#F8EED5] flex h-screen flex-col relative overflow-hidden ${
            showProfile ? "mr-[25%] ml-auto" : "mx-auto"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-2">
            <p className="text-midas font-bold ml-3 text-[#B28D26]">MIDAS</p>
            <FontAwesomeIcon
              icon={faBars}
              className="text-[#B28D26] text-xl cursor-pointer"
              onClick={toggleProfile}
            />
          </div>
          {/* chat kku */}
          <div className="text-[#B28D26] mx-auto my-auto font-semibold">
            <p className="text-center">Hello again!</p>
            <p>What do you need to do today?</p>
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="flex mx-auto rounded overflow-hidden">
              <input
                type="text"
                className="w-full px-4 py-2 border border-[#B28D26] bg-[#F8EED5] focus:outline-none focus:border-slate-900 rounded placeholder:text-[#B28D26]"
                placeholder="Enter your text..."
              />
              <div className="mx-3 w-11 p-4 bg-[#E5C468] rounded-3xl">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#B28D26" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* sidebar kku */}
        <div
          className={`fixed top-0 right-0 h-screen w-1/4 bg-[#B28D26] rounded-l-3xl shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
            showProfile ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <div className="flex justify-between items-center px-4 py-2">
            <p className="text-xl font-semibold text-[#F8EED5]"></p>
            <div className="mt-4">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-[#F8EED5] text-lg cursor-pointer"
                onClick={toggleProfile}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
