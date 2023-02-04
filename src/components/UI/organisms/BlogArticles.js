import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BlogArticles() {
  let blog = useSelector((state) => state.blog);
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
    <div className="posts">
      {blog.length > 0 &&
        blog.map((post, id) => {
          return (
            <div key={id}>
              <Link to={`view/${id}`} className="post">
                <h3>{post.title}</h3>
                <time className="date">
                  {monthNames[new Date(post.pubDate).getMonth()] +
                    ", " +
                    new Date(post.pubDate).getFullYear()}
                </time>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export { BlogArticles };
