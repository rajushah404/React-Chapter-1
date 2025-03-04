const About = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <h1>About Us</h1>
      <p>
        Welcome to our platform! We are dedicated to providing the best products with top-notch quality and service.
        Our mission is to make online shopping convenient, affordable, and enjoyable for everyone.
      </p>

      <h2>Our Vision</h2>
      <p>
        We believe in innovation, quality, and customer satisfaction. Our goal is to create an online marketplace that 
        meets all your needs in one place, with a seamless shopping experience.
      </p>

      <h2>Why Choose Us?</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>✔ High-quality products at the best prices</li>
        <li>✔ Fast and reliable delivery</li>
        <li>✔ Secure payment options</li>
        <li>✔ 24/7 customer support</li>
      </ul>

      <h2>Get in Touch</h2>
      <p>
        Have any questions? We’d love to hear from you! Feel free to <a href="/contact">contact us</a> anytime.
      </p>
    </div>
  );
};

export default About;
