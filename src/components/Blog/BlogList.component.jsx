import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processing, ready, wrong } from "../../store/slice/blog.slice";
import { api } from "../../store/service/baseURL";

const BlogListComponent = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((store) => store.blog);

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
    <div className="  h-screen grid gap-5 grid-cols-12 grid-rows-12">
      {data?.map((i) => (
        <div key={i.id} className=" col-span-6 bg-white row-span-5 ">
          <img src="" alt="" />
          <div>
            <div>
              <h4>{i.Author}</h4>
              <h4>{i.Date}</h4>
            </div>
            <h1>{i.Title}</h1>
            <button></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogListComponent;
