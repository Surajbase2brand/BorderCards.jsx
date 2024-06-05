import { useState } from "react";
import OrangeCity2 from "../assets/OrangeCity2.jpg";
import OrangeCity3 from "../assets/OrangeCity3.jpg";
import OrangeCity4 from "../assets/OrangeCity4.jpg";

const BorderCards = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="w-full min-h-screen flex flex-col md:flex-row gap-10 items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${OrangeCity2})` }}
    >
      <div className="animated_card cursor-pointer group">
        <div className="animated-card-before h-[500px] w-[350px] bg-orange-500 z-[1] rounded-[16px] group-hover:h-[508px] group-hover:w-[358px]" />

        <div
          className="h-[500px] w-[350px] rounded-[16px] z-[10] flex items-center justify-center bg-center bg-cover"
          style={{ backgroundImage: `url(${OrangeCity3})` }}
        >
          <h2 className="text-[20px] font-bold text-cyan-200">About Me</h2>
        </div>
      </div>

      <div
        className={`card h-[500px] w-[500px] rounded-[16px] cursor-pointer border group border-white hover:border-black border-opacity-60 ${
          isHovering ? "tilted" : ""
        }`}
        onClick={() => setIsHovering(!isHovering)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="w-full h-full rounded-[16px] flex items-center justify-center flex-col gap-10 text-center">
          <h1 className="group-hover:animate-textRotation text-cyan-200 font-bold text-6xl z-[20]">
            Welcome
          </h1>
          <p className="text-gray-200 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>

      <div className="animated_card hover:h-[508px] hover:w-[357px] cursor-pointer overflow-hidden rounded-[16px] group">
        <div className="animated-card-before w-[50%] h-[180%] rounded-[12px] z-[1] rotate-45 bg-white group-hover:animate-rotate360" />

        <div
          className="h-[500px] w-[350px] rounded-[16px] z-[10] flex items-center justify-center bg-center bg-cover"
          style={{ backgroundImage: `url(${OrangeCity4})` }}
        >
          <h2 className="text-[20px] font-bold text-cyan-200">My Projects</h2>
        </div>
      </div>
    </div>
  );
};

export default BorderCards;
