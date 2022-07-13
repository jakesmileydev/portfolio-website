import Header from "../components/Header";
export default function Contact(props) {
  return (
    <>
      <Header
        headerText="CONTACT"
        setIsMobileNavOpen={props.setIsMobileNavOpen}
      />
      <main>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            className="contact-form__input"
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            className="contact-form__input"
            type="email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="contact-form__textarea"
          />
          <button className="contact-form__button">Send</button>
        </form>
      </main>
    </>
  );
}
