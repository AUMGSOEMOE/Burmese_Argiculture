import React from "react";
import { useSelector } from "react-redux";

const PaginationComponent = ({
  blogPerPage,
  blogList,
  setCurrentPage,
  currentPage,
}) => {
  const { data, error, loading } = useSelector((store) => store.blog);

  const handleClick = (index) => {
    setCurrentPage(index + 1);
  };
  return (
    <div className=" flex gap-3">
      {Array.from({ length: Math.ceil(data?.length / blogPerPage) }).map(
        (_, index) => (
          <button
            className={`rounded-full w-7 h-7 hover:bg-slate-200 ${
              currentPage === index + 1 && "bg-main hover:bg-none text-white"
            }`}
            onClick={handleClick.bind(null, index)}
            key={index}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
};

export default PaginationComponent;
