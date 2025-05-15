import React from "react";

const Skill = ({ skillText, colStart }) => {
  return (
    <div
      className={`skill-box relative w-full p-[2px] py bg-[linear-gradient(to_right,_#007BFF_0%,_#007BFF_85%,_#00F9A6_100%)] rounded-sm ${
        colStart && "sm:col-start-2"
      } group z-50`}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(0,123,255,0.5)_0%,_rgba(0,123,255,0.5)_85%,_rgba(0,249,166,0.5)_100%)]
       -z-10 rounded-sm transition-all duration-500 group-hover:blur-sm"
      ></div>

      <div className="bg-white h-10 sm:h-12 flex items-center justify-center font-[roboto] w-full rounded-sm text-center sm:text-lg lg:text-xl lg:h-16 lg:font-medium cursor-pointer transition-all duration-1000">
        {skillText}
      </div>
    </div>
  );
};

export default Skill;
