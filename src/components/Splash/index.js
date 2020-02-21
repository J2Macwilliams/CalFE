import React from 'react';
import LoginBar from './LoginBar';
import Logo from '../../img/whiteLogo.png'
// Pull in LoginBar component (Sign in form / Register modal)
export default function Splash() {
  return (
    <div className="splash">
      <LoginBar />
      <div className="copyBox">
        <div className="copy">
          <img src={Logo} alt="" className='d8picker'/>
          <h3>Do you have repeating events that happen sporadically?
Tired of making the same event for different times?
Try D8picker! The calendar extension that allows you to easily apply your reoccurring events to days on your calendar.</h3>
        </div>
      </div>
    </div>
  );
}
