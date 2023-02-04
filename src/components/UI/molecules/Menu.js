import { MenuItem } from "../atoms/header/MenuItem";
import { ToggleBtn } from "../atoms/header/ToggleBtn";
import { AdditionalLink } from "../atoms/header/AdditionalLink";

function Menu() {
  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <ul>
            <MenuItem />
            <AdditionalLink />
          </ul>
        </nav>
      </div>
      <ToggleBtn />
    </>
  );
}

export { Menu };
