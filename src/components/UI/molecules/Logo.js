import { NameLogo } from "../atoms/NameLogo";

function Logo() {
  return (
    <>
      <div className="brand">
        <a href="/" className="logo">
          <NameLogo />
        </a>
      </div>
    </>
  );
}

export { Logo };
