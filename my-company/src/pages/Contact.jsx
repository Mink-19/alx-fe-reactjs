import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Optional: log form data
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div style={{
      padding: '40px',
      maxWidth: '600px',
      margin: '50px auto',
      backgroundColor: '#fff0f5',
      borderRadius: '10px',
      boxShadow: '0 3px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#C2185B', textAlign: 'center' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          rows="5"
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#C2185B',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
      {submitted && (
        <p style={{ color: '#388E3C', textAlign: 'center', marginTop: '20px' }}>
          Thank you! Your message has been submitted.
        </p>
      )}
    </div>
  );
}

export default Contact;
