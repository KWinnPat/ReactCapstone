const Contact = () => {
  return (
    <div>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <div className="form-group">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                required
              />
            </label>

            <label htmlFor="phone">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                placeholder="Message*"
                rows="5"
                required
              ></textarea>
            </label>
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
