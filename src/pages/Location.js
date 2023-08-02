import React, { useEffect, useState } from "react";
import vvinspect from '../images/MyGarage.png';
import Backimg from '../images/pattern.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Location = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const locations = location.state.locations;
  const userDetails = JSON.parse(sessionStorage.getItem('userdetails'));
  // console.log(userDetails.id);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData && userData.length > 0) {
      setSelectedLocation(userData);
    }
  }, []);

  const navigateToDashboard = async (locationId) => {
    const locationDetails = locations.find(location => location.id === locationId);
    if (locationDetails) {
      const UserID = userDetails && userDetails.id;
      const LocationID = locationDetails.id;

      // console.log(LocationID);

      
        try {
          // Make the API call with UserID and LocationID
          const response = await fetch('http://dev.vvinspect.com/api/mobile/vehicles/assigned', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ UserID, LocationID })
          });
          const data = await response.json();

          // console.log(data)

          sessionStorage.setItem('selectedLocation', JSON.stringify(locationDetails));
          navigate('/Dashboard');
        } catch (error) {
          console.error('Error:', error);
        }
      
    }
  };

  return (
    <section className="Login-page background-img-loc" style={{ backgroundImage: `url("${Backimg}")` }}>
      <div className="container1">
        <div className="row h-100">
          <div className="col-lg-6 col-md-6">
            <div className="login__form__wrapper h-100">
              <div className="vvinspecticon">
                <img src={vvinspect} id="icon" alt="vvinspect" className="mb-4" />
              </div>
              <div id="customerData">
                <div className="clearfix"></div>
                <div className="row location-wrap">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="text-center">
                      <h1 className="text-center mt-5 login-title" style={{ fontSize: "3.75rem !important" }}><b>Recorn Inspection </b></h1>
                      <h2 className="text-center mt-11 login-title">Select your current location</h2>
                    </div>
                    <div>
                      <div className="row text-center mt-6">
                        <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12">
                          <div className="scrollbar" style={{ "overflow-y": "auto", "height": "300px", "padding": "0px 11px", "overflow-x": "hidden", "scroll": "smooth", "scrollbar-width": "thin" }}>
                            <div className="text-zero top-left-button-container">
                              {locations.map((location) => (
                                <div className="locationname" key={location.id}>
                                  <button type="button" className="btn btn-outline-primary btn-lg top-right-button mr-3" onClick={() => navigateToDashboard(location.id)}>
                                    {location.location_name}
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
