import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBlogFeed } from "../../rtk/slices/blogSlice";
import { BlogArticles } from "../UI/organisms/BlogArticles";

function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogFeed());
  }, []);

  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="blog-intro">
            <h1>Blog</h1>
            <p>
              Here you find my lastes article about web Development & Tech, All
              article has been writed in my{" "}
              <a
                href="https://ahnaineabd.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                medium account
              </a>
              .
            </p>
          </div>
          <div className="blog-articles">
            <BlogArticles />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
