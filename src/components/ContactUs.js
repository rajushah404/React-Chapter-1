const ContactUs = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <p>
        Have questions, feedback, or need support? We're here to help! Reach out to us through any of the methods below.
      </p>

      <h2>Get in Touch</h2>
      <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
      <p>Address: 123 Main Street, City, Country</p>

      <h2>Follow Us</h2>
      <p>
        Stay connected with us on social media:
      </p>
      <p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
      </p>

      <h2>Send Us a Message</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" }}>
        <input type="text" placeholder="Your Name" required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="email" placeholder="Your Email" required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <textarea placeholder="Your Message" rows="4" required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}></textarea>
        <button type="submit" style={{ padding: "10px", borderRadius: "5px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
