import React from 'react';

const Welcome = () => {
  return (
    <div style={{ marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <img src='https://res.cloudinary.com/dlqzgxfs0/image/upload/f_auto/v1709397568/sprachtandem/large_Sprachtandem_d3a80c3ce6.jpg' alt='Welcome Image' style={{ width: '70%', maxWidth: '800px', height: 'auto'}} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>What is a language speaking partner?</h1> 
        <p>A language speaking partner is to teach the local language and culture for the newcomer.</p>
      </div>
    </div>
  );
}

export default Welcome;

