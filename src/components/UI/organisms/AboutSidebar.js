import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../../rtk/slices/userSlice";

function AboutSidebar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let img = [];
  
  if (user.length > 0) {
    for (let i = 0; i < 1; i++) {
      if (user.length > 0) {
        img.push(user[i]);
      }
    }
  }

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  return (
    <>
      <aside className="sidebar">
        <section className="card">
          <h3>Me</h3>
          <img
            src={img.map((elm) => {
              return elm.owner.avatar_url;
            })}
            alt="ittid_IMG"
            className="lead_img"
          />
        </section>
        <section className="card">
          <h3>favourite programming language</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
            alt="JavaScript"
            className="lead_img"
          />
        </section>
      </aside>
    </>
  );
}

export { AboutSidebar };
