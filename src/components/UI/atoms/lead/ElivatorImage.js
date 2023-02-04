import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../../../rtk/slices/userSlice";

function ElivatorImage() {
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
    <div className="elivator_image">
      <img
        src={img.map((elm) => {
          return elm.owner.avatar_url;
        })}
        alt="ittid_IMG"
        className="lead_img"
      />
    </div>
  );
}

export { ElivatorImage };
