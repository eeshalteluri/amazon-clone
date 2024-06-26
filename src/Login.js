import React from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //some firebase register stuff
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //it successfully created a new user with email and password
        if(auth){
            navigate('/')
        }        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
        <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo"/>
        </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value) }/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='login_signInButton' onClick={signIn}>Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
        </div>

    </div>
  )
}

export default Login
