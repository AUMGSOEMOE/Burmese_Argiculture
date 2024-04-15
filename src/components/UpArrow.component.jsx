import React, { useState } from "react";
import { VscArrowUp } from "react-icons/vsc";

const UpArrowComponent = () => {
  const [down, setDown] = useState(false);

  const handleScroll = () => {
    setDown(true);
    console.log(down);
  };
  return (
    <div
      className={`border hidden border-main fixed bg-white  bottom-5 right-0 w-14 h-14 text-2xl rounded-full  ${
        setDown && "block"
      } `}
    >
      <button
        className=" w-full h-full flex justify-center items-center text-main"
        onScroll={handleScroll}
      >
        <VscArrowUp />
      </button>
    </div>
  );
};

export default UpArrowComponent;
