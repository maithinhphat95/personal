import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

Information.propTypes = {
    
};

function Information(props) {
    return (
        <div class="information-container">
          <h1 class="name">
            THINH PHAT <span class="lastname">Mai</span> (Mr.){" "}
          </h1>
          <h2 class="job">Fresher Front-end Developer</h2>
          <br></br>
          <p class="address">
            <i class="icon fas fa-address-card"></i>Tam Dan Hamlet, Phu Ninh
            Distric, Quang Nam Province
          </p>
          <div class="basic-infor">
            <p class="birthday">
              <i class="icon fas fa-user"></i>28-07-1995
            </p>
            <p class="phone">
              <i class="icon fas fa-mobile-alt"></i>(+84) 964 084 330
            </p>
            <p class="email">
              <i class="icon fas fa-envelope"></i>maithinhphat.tdh@gmail.com
            </p>
          </div>
        </div>
    );
}

export default Information;