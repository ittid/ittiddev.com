import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogFeed } from "../../rtk/slices/blogSlice";

function PostView() {
  let { postId } = useParams();
  let blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogFeed());
  }, []);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <div className="view-post">
        <div className="container">
          <div className="content">
            <header>
              <h1 className="title-post">{blog[postId]?.title}</h1>
              <time className="date-post">
                <strong>published:</strong>
                <span>
                  {monthNames[new Date(blog[postId]?.pubDate).getMonth()] +
                    ", " +
                    new Date(blog[postId]?.pubDate).getFullYear()}
                </span>
              </time>
            </header>

            <article>
              <div
                dangerouslySetInnerHTML={{ __html: blog[postId]?.content }}
              />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostView;
