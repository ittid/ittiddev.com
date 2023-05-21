import ContactForm from "../UI/atoms/contact/ContactForm";
import { InformationContact } from "../UI/atoms/contact/InformationContact";

function About() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <h1>Contact</h1>
          <section className="contact-section">
            <div className="contact-information">
              <InformationContact
                name="Name :"
                details="Ahnaine Abdessamad (ittid)"
              />
              <InformationContact
                name="Email :"
                details="ahnaine3bd@gmail.com"
                href="mailto:"
              />
              <InformationContact
                name="Phone :"
                details="06*********"
                href="tel:"
              />
              <InformationContact
                name="Facebook :"
                details=""
                href="https://www.facebook.com/aHnaineAbdou"
              />
            </div>
            <div className="contact-form ">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
