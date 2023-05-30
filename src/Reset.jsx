import React, { useState } from 'react';
import './login.css';
import './App.css'
export function Reset() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const onSubmit = () => {
     if(newPassword.length<6 || confirmPassword.length<6 )
    alert("Please enter a valid password of minimum length 6 ");
    else if(newPassword!=confirmPassword)
    alert("Confirm password does not match with new password ");
    else if(verificationCode.length!=6)
    alert("please enter the valid 6 letter alphanumeric code");
    else
    {
    alert("Password Changed successfully\n\n"+
    "redirecting to the login page......");
    setNewPassword('');
    setConfirmPassword('');
    setVerificationCode('');
    window.location.href="/";
    } 
  };
  const resendCode = () => {
    alert("Code has been sent on registered Email ID");
  };
    return (
      <div className="App">
        <header className="App-header">
        <div className='loginForm'>
        
        <form>
        <h1 text>Reset Password</h1>
            <input type="password" placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
         
          <div>
            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) } />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around" }}>
          <input type="text" placeholder='Verification code' value={verificationCode} onChange={(e) => setVerificationCode(e.target.value) } />
            <a href="#" onClick={resendCode}  style={{ marginLeft: '10px' }} >
              Resend Code
            </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around" }}>
            <button type="button" onClick={onSubmit}>Submit</button>
            </div>
            
        </form>
      </div>
        </header>
      </div>
    );
  }