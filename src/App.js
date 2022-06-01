import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51L2xKxFJpU6hrkj64dilfwMyzE0VPpRagEJ1TXxNi8RaHoFL9Pt0AknvYfoemAy3AnjgtChu6NUVLA9iPi44TbKd00ycc2SmQ8');

function App() {
  const [{}, dispatch] =useStateValue();
  useEffect(() => {
    //Only run once the app component logs
    auth.onAuthStateChanged(authUser => {
      console.log('User is signed in', authUser)
      if (authUser) {
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/orders" element={[<Header />, <Orders />]}/>
          <Route path="/login" element={[<Login />]}/>
          <Route path="/checkout" element={[<Header />, <Checkout />]}/>
          <Route path="/payment" element={[<Header />, <Payment />]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
