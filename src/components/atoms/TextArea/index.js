import React from "react";
import "./TextArea.scss";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="TextArea" {...rest}></textarea>
    </div>
  );
};

export default TextArea;
