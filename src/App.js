import React from 'react';
import './App.css';
import Header from '../../amazon/src/Header.js';
import Home from '../../amazon/src/Home.js';
import Checkout from '../../amazon/src/Checkout.js';
import Login from '../../amazon/src/Login.js';
import "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import {auth} from "../../amazon/src/firebase.js"
import { useStateValue } from '../../amazon/src/StateProvider.js';
import { useEffect } from 'react';
import Payment from '../../amazon/src/Payment.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_live_51KY0gNSHPEyiulQOXZxZHQAek0hs30A2EUygS6v8q1Ye5nUCzusvjQlw5v1kD6j2gK82XB3VM9wz061eP6m6Vali00LniQCE2h'
);


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    //will only once when the app component loads

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);

      if(authUser){

        dispatch({
          type:'SET_USER',
          user: authUser,
        })

      }else{
        dispatch({
          type:'SET_USER',
        user: null,
        })
      }
    })
  },[])


  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={
        <>
        <Header/>
         <Home/>
        </>
      }/>

      <Route path='/login' element={
        <>
        <Login/>
        </>
      }/>
      
      <Route path='/checkout' element={
        <>
        <Header/>
        <Checkout/>
        </>
        
      }/>

<Route path='/payment' element={
        <>
        <Header/>
        <Elements stripe={promise}>
        <Payment/>
        </Elements>
        </>
        
      }/>
      </Routes>
    </div>
  );
}

export default App;
