import { FooterMenu } from "./footer/FooterMenu";
import { ElivatorText } from "./lead/ElivatorText";

function AboutText() {
  return (
    <>
      <div className="me">
        <h1>About me</h1>
        <ElivatorText />
        <p>
          You can contact me by email at: <strong>ahnaine3bd</strong> at{" "}
          <strong>gmail.com</strong> to say hi! I always appreciate meeting new
          people.
        </p>
        <h2>Links</h2>
        <p>A non-exhaustive list.</p>
        <FooterMenu />
      </div>
    </>
  );
}

export { AboutText };
