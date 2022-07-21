import React from 'react';
import PropTypes from 'prop-types';

Objective.propTypes = {
    
};

function Objective(props) {
    return (        
        <div class=" container objective-container">
          <div class="objective">
            <div class="content-header uppercase">
              <i class="icon fas fa-tag"></i>Objecttive
            </div>
            <p class="objective-text firstline-indent margintop-16 paddingleft-16">
              My programming philosophy is towards customer satisfaction. The
              customer in work are partners, superiors and colleagues. I hope I
              can use my knowledge to make people's lives better.
            </p>
          </div>
        </div>
    );
}

export default Objective;