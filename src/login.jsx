import React, { useState } from 'react';
import './login.css';
import './App.css'
export function Login (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const   regEx = /[a-zA-Z0-9._-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const onLogin = () => {
      console.log(email);
      if(!regEx.test(email))
      {
              setError(true);
              alert("Please enter a valid email address");
      }
      else if(password.length<6)
      alert("Please enter a valid password of minimum length 6 ");
      else
      {
      alert("Welcome, You have successfully logged in");
      setEmail('');
      setPassword('');
      window.location.href="/home";
      }
      
    };
    const onForgotpass = () => {
      alert("Password policy is under work");
    };
    return (
      <div className="App">
        <header className="App-header">
        <div className='loginForm'>
        <h1>Login Screen</h1>
        <form>
          <div style={{display:"flex",justifyContent:"center"}}>
  
          <img src="loginimg.png" width="100" height="100" />
          </div>
            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
         
          <div>
            <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value) } />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around" }}>
            <button type="button" onClick={onLogin}>Login</button>
            <a href="/reset"  style={{ marginLeft: '10px' }} >
              Forgot Password?
            </a>
            </div>
            
        </form>
      </div>
        </header>
      </div>
    );  
}