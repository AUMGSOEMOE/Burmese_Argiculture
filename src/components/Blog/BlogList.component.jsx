import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processing, ready, wrong } from "../../store/slice/blog.slice";
import { api } from "../../store/service/baseURL";
import { Pagination } from "..";
import { CiUser } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { HiChevronDoubleRight } from "react-icons/hi";

const BlogListComponent = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((store) => store.blog);

  //pagination

  const blogPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = blogPerPage * currentPage;
  const firstIndex = lastIndex - blogPerPage;

  const blogList = data?.slice(firstIndex, lastIndex);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/blog");
        dispatch(ready(res.data));
        return res.data;
      } catch (error) {
        throw new Error(error.message);
      }
    })();
  }, []);
  return (
    <div>
      <Pagination
        blogList={blogList}
        blogPerPage={blogPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className=" mt-4 h-screen grid gap-5 grid-cols-12 ">
        {blogList?.map((i) => (
          <div
            key={i.id}
            className=" col-span-6 shadow-2xl rounded-lg bg-white flex gap-4 p-10 h-full "
          >
            <div className=" w-48 ">
              <button className="w-52 hover:scale-110 duration-700">
                <img className="  rounded-2xl  " src={i.Image} alt="" />
              </button>
            </div>
            <div>
              <div className="flex flex-col gap-2 opacity-55 ">
                <a href="#" className="flex items-center hover:text-main gap-1">
                  <CiUser className="text-main" />
                  By {i.Author}
                </a>
                <a href="#" className="flex items-center hover:text-main gap-1">
                  <MdDateRange className="text-main" />
                  {i.Date}
                </a>
              </div>

              <button className="text-2xl text-left hover:text-main hover:underline duration-700 font-bold mt-5">
                {i.Title}
              </button>

              <button className="flex items-center mt-10 justify-center border border-main text-main hover:text-white hover:bg-main duration-500 w-40 h-12 rounded-full">
                <span>Read More</span>
                <HiChevronDoubleRight className="text-xl mt-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListComponent;
