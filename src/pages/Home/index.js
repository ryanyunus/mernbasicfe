import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useSelector } from "react-redux";

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);
  // const stateGlobal = useSelector((state) => state);
  // console.log("state Global: ", stateGlobal);
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/blog/posts?page=1&perPage=2")
      .then((result) => {
        console.log("data API", result.data);
        setDataBlog(result.data.data); // Set the fetched array of blog posts to dataBlog
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          // onClick={() => history.push("/create-blog")}
          onClick={() => navigate("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => (
          <BlogItem
            key={blog._id}
            image={`http://localhost:4000/${blog.image}`}
            title={blog.title}
            body={blog.body}
            name={blog.author.name}
            date={blog.createdAt} // Use backticks and proper interpolation
          />
        ))}
      </div>
      <div className="pagination">
        <Button title="Prev" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
