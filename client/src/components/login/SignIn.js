import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../redux/actions';
import '../login/SignIn.css';

const SignIn = () => {

    const {accesstoken,loading} = useSelector(state => state.user);
    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(signIn({ email, password }));
        setEmail("");
        setPassword("");
      };

    const showPassword = () => {
        let x = document.getElementById("inputPassword");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      };
    return (
        
        <div className= "bgcolorsignin">
          <h1>Login to your account</h1>
            {
              loading ? 
        <Spinner animation="border" /> :
              accesstoken ? 
        <Redirect to={accesstoken.role === 0 ? "/" : "/getProducts"}/> :
        
        <form className="login" onSubmit={handleSignIn}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="inputPassword"
          />
          <i className="far fa-eye" id="check" onClick={showPassword} ></i>
          <button type='submit'>Login</button>
        </form>
       
      }
        </div>
    )
}

export default SignIn
