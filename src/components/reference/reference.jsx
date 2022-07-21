import React from 'react';
import PropTypes from 'prop-types';

Reference.propTypes = {
    
};

function Reference(props) {
    return (
        <div class=" container reference-container">
          <div class="reference">
            <div class="content-header uppercase">
              <i class="icon fas fa-flag"></i>Reference
            </div>
            <div class="reference-text margintop-16 paddingleft-16">
              <div class="ref-person">Mr. Loi</div>
              <div class="italic-text">Manager of Maintenance Department</div>
              <div class="email">
                <i class="icon fas fa-envelope"></i>Email: ... ... ...
                @gmail.com
              </div>
              <div class="phone">
                <i class="icon fas fa-mobile-alt"></i>Phone: (+84) ... ... ...
              </div>
            </div>
          </div>
        </div>
    );
}

export default Reference;