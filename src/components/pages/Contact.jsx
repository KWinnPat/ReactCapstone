const Contact = () => {
  return (
    <div>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
              required
            />
            <label htmlFor="phone"></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              placeholder="Message*"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
