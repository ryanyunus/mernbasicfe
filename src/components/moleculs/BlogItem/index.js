import React from "react";
// import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import "./BlogItem.scss";
import { useNavigate } from "react-router-dom";
import { Gap } from "../../atoms";
const BlogItem = (props) => {
  const navigate = useNavigate();
  const { image, title, name, date, body } = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {name}-{date}
        </p>
        <p className="body">{body}</p>
        <Gap heigt={20} />
        <Button title="View Detail" onClick={() => navigate("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
