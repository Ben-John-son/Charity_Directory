import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: 'auto',
        margin: '0 auto',
        background: '#D3F2E3',
      }}
    >
      <img src="https://i.imgur.com/CY7xcWk.png" alt="GiveHub Logo" style={{ width: '300px', height: '300px' }} />
      <h1>Welcome to GiveHub!</h1>
      <p>By Signing in below you will gain access to a list of charities for different causes, or add one of your own!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
