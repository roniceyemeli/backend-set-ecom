import React, { useState } from 'react';
import {Spinner} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../redux/actions';
// import '../register/SignUp.css';

const SignUp = () => {
    const {users,loading} = useSelector(state => state.user);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSignUp = (e) => {
      e.preventDefault();
      dispatch(signUp({ name, email,password }));
      setName("");
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

    console.log(loading)
    console.log(users)
    return (
        <div>
            <h2>Create an account </h2>
                 {
                    loading ? 
                      <Spinner animation="border"/>
                     : users ? 
                      <Redirect to="/login" />
                     : 
                      <form className="login" onSubmit={handleSignUp} >
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="enter your name"
                        />
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
                        <button type="submit">Sign Up</button>
                      </form>
                    }
        </div>
    )
}

export default SignUp
