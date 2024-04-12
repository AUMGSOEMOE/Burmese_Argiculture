import React from "react";

const FormElementComponent = ({ type, name, placeholder, style, ...rest }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`p-2 bg-gray-100 rounded-full ${style}`}
        {...rest}
      />
    </div>
  );
};

export default FormElementComponent;
