import React, { useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg from '../images/bigstock-Car-Service-72493456.jpg';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Loginvalidateclick = async (e) => {
    e.preventDefault();

    if (username.trim().length === 0) {
      toast.dismiss();
      toast.error("Username is required!");
      return;
    } else if (password.trim().length === 0) {
      toast.dismiss();
      toast.error("Password is required!");
      return;
    } else {
      try {
        // Perform your login validation logic here

        // Make the API call to fetch the location data
        const response = await fetch('http://dev.vvinspect.com/api/mobile/checklogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password })
        });
        const data = await response.json();

        const locations    = data.Locations;
        const userdetails  = data.UserDetails;
        
        // console.log(userdetails);

        if (locations.length > 1) {
          toast.dismiss();
          toast.success('Login Successfully');
          
          sessionStorage.setItem('userData', JSON.stringify(locations));
          sessionStorage.setItem('userData', JSON.stringify(userdetails));
          
          setTimeout(() => {
            navigate('/location', { state:{ locations, userdetails } });
          }, 1000);
        } else {
          toast.dismiss();
          toast.success('Login Successfully');
          
          sessionStorage.setItem('userData', JSON.stringify(locations));
          sessionStorage.setItem('userData', JSON.stringify(userdetails));
          
          setTimeout(() => {
            navigate('/dashboard', { state:{ locations, userdetails } });
          }, 1000);
        }
      } catch (error) {
        console.error('Error:', error);
        toast.dismiss();
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="Login-page">
      <section className="background-img-full" style={{ backgroundImage: `url("${backgroundImg}")` }}>
        <div className="container container-wid">
          <div className="card sign-wid shadow-2-strong">
            <div className="card-body p-5">
              <h3 className="mb-5 text-center">Sign Up</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label">Username<span className="required-star">*</span></label>
                  <div>
                    <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Username" className="form-control" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password<span className="required-star">*</span></label>
                  <div>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" className="form-control" />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary btn-lg btn-wid" name="submit" onClick={Loginvalidateclick} id="submit">Submit</button>
                </div>
              </form>
              <ToastContainer/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
