import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaPlus } from "react-icons/fa6";

const MenuButtonComponent = ({ name, data }) => {
  const items = Array.of(data);
  const list = Array.from(items);
  useEffect(() => {
    console.log(list);
  });
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="flex items-center gap-1">
            {name}
            <FaPlus className="text-xs text-main" />
          </button>
        </DropdownMenuTrigger>
        {items.map((i, index) => (
          <DropdownMenuContent key={index}>
            <DropdownMenuItem>{i}</DropdownMenuItem>
          </DropdownMenuContent>
        ))}
      </DropdownMenu>
    </div>
  );
};

export default MenuButtonComponent;
