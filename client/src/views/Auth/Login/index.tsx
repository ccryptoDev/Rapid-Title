import React from 'react';
import './index.view.css';
import AuthBG from 'components/common/AuthBg'
import LoginCard from 'components/common/LoginCard'

function Login() {
  return (
    <>
      <div className='bg-white h-screen w-screen relative flex justify-center items-center'>
        <AuthBG />
        <LoginCard />
      </div>
    </>
  );
}

export default Login;
