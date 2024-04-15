import React, { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const MenuButtonComponent = ({ name, data }) => {
  const [mice, setMice] = useState(false);
  const handleMouse = () => {
    setMice(true);
    console.log(mice);
  };
  const handleOut = () => {
    setMice(false);
    console.log(mice);
  };
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          <button
            onMouseOver={handleMouse}
            onMouseOut={handleOut}
            className="flex items-center gap-1 "
          >
            {name}
            {mice ? (
              <FaMinus className="text-xs text-main" />
            ) : (
              <FaPlus className="text-xs text-main" />
            )}
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="flex flex-col justify-center px-10 ">
          {data?.map((i, index) => (
            <div key={index} className="flex">
              <a href="" className=" hover:text-main mt-3 ">
                {i}
              </a>
            </div>
          ))}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default MenuButtonComponent;
