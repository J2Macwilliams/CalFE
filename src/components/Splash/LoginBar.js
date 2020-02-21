import React from 'react';
import googleLoginUrl from "../../utils/google-oauth-url";

import GoogleBtn from '../../img/btn.png';
import favicon from '../../img/white.png'
import '../../App.css';

function Login() {
  return (
    <div className="navbar">
       <img src={favicon} alt='' className='favicon' />
      <div className='googleBtn'>
        <a href={googleLoginUrl}>
          <img src={GoogleBtn} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Login;
