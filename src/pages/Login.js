import React from 'react';
import LoginForm from '../components/LoginForm';
import logo from '../assets/img/intigo.png';


function Login() {
  return (
    <div>
      <img src={logo} alt="Intigo Logo" style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />
      <LoginForm />
    </div>
  );
}

export default Login;
