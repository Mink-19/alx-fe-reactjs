function Services() {
  const services = ["Technology Consulting", "Market Analysis", "Product Development"];

  return (
    <div style={{ padding: '40px', backgroundColor: '#e8f5e9', minHeight: '80vh' }}>
      <h1 style={{ textAlign: 'center', color: '#388E3C', marginBottom: '30px' }}>Our Services</h1>
      <ul style={{ maxWidth: '600px', margin: '0 auto', padding: '0', listStyle: 'none' }}>
        {services.map((service, index) => (
          <li key={index} style={{
            backgroundColor: '#ffffff',
            marginBottom: '15px',
            padding: '15px 20px',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            fontSize: '1.1rem'
          }}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;

