import React from "react";
import { Button, FormElement } from "..";
import { FaRegUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";

const FormComponent = () => {
  return (
    <div>
      <form>
        <div className=" flex flex-col gap-6 ">
          <div className="flex gap-2">
            <div className="flex items-center p-2 bg-gray-100 rounded-full">
              <FormElement
                type={"text"}
                style={"w-52"}
                placeholder={"Your Name*"}
                name={"name"}
              />
              <FaRegUser className="text-main " />
            </div>
            <div className="flex items-center p-2 bg-gray-100 rounded-full">
              <FormElement
                type={"email"}
                style={"w-64"}
                placeholder={"Your Email*"}
                name={"email"}
              />
              <CiMail className="text-main" />
            </div>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-100 rounded-full">
            <FormElement
              type={"text"}
              style={" w-96"}
              placeholder={"Website"}
              name={"website"}
            />
            <TbWorld className="text-main" />
          </div>
          <div>
            <textarea
              name="textarea"
              className="w-full bg-gray-100  p-4 rounded-lg"
              id="textarea"
              cols="20"
              rows="5"
              placeholder="Write a Comment"
            ></textarea>
          </div>
          <div>
            <Button
              type="submit"
              style={"bg-main text-white hover:bg-black"}
              label={"POST COMMENT"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
