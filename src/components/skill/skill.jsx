import React from 'react';
import PropTypes from 'prop-types';


Skill.propTypes = {
    
};

function Skill(props) {
    return (        
        <div class=" container skill-container">
          <div class="skill">
            <div class="content-header uppercase">
              <i class="icon fas fa-bookmark"></i>Skill
            </div>
            <div class="skill-text margintop-16">
              <div class="skill-language paddingleft-16 marginbottom-16">
                <div class="bold-text">
                  <i class="icon fas fa-globe-americas"></i>Programming
                  language:
                </div>
                <ul class="skill-list paddingleft-24">
                  <li class="skill-item">
                    Html, Css{" "}
                    <span class="italic-text">
                      (Javascript & Typescript are under study)
                    </span>{" "}
                  </li>
                  <li class="skill-item italic-text">
                    (ReactJS / Redux / AngularJS / Vuejs are under study)
                  </li>
                  <li class="skill-item italic-text">(Python, C#, ...)</li>
                  <li class="skill-item">
                    Ladder <span class="italic-text">(PLC language)</span>{" "}
                  </li>
                </ul>
              </div>
              <div class="skill-language paddingleft-16">
                <div class="bold-text">
                  <i class="icon fas fa-chart-pie"></i>Soft Skill:
                </div>
                <ul class="skill-list paddingleft-24">
                  <li class="skill-item">Teamwork, independent-study</li>
                  <li class="skill-item">Data collection & analysis</li>
                  <li class="skill-item">Planning skill</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Skill;