import React from "react";

const ColoredButton = ({text,fullWidth,centered,onClick}) => {
  return (
    <button onClick={onClick} className={`colored-btn w-full sm:w-fit sm:px-8 h-11 bg-[linear-gradient(to_right,_#007BFF_0%,_#007BFF_85%,_#00F9A6_100%)] rounded-sm text-lg font-medium text-white ${fullWidth && "sm:w-full"} ${centered && "sm:mx-auto sm:px-10 "} lg:rounded-xl cursor-pointer hover:scale-105 transition-all duration-300`} >
      {text}
    </button>
  );
};

export default ColoredButton;
