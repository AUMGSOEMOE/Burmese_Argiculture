import React from "react";

const ButtonComponent = ({ label, style, icon = "" }) => {
  return (
    <div>
      <button
        className={`flex items-center justify-center duration-500  font-semibold text-lg w-44 h-14 rounded-full ${style}`}
      >
        <span>{label}</span>
        {icon}
      </button>
    </div>
  );
};

export default ButtonComponent;
