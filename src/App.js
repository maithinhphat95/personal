import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Skill from "./components/skill/skill";
import Objective from "./components/objective/objective";
import Reference from "./components/reference/reference";
import Information from "./components/information/Information";
function App() {
  return (
    // This is the first project, I make it before I take part in the course FE25 at iviettech center, while I was self studying from youtube
    <div class="main">
      <div class="content">
        <a
          class="avatar-container"
          href="https://www.facebook.com/mai.thinhphat/"
          target="_blank"
        >
          <div class="avatar"></div>
        </a>
        {/* Object Box */}
        <Objective />
        {/* Skill box */}
        <Skill />
        {/* Reference */}
        <Reference />
        {/* Information */}
        <Information />

        <div class=" container education-container">
          <div class="education">
            <div class="content-header uppercase">
              <i class="icon fas fa-graduation-cap"></i>Education
            </div>
            <div class="education-text margintop-16 paddingleft-16">
              <div class="university">
                <div>
                  <div class="school uppercase bold-text">
                    Da Nang University of Technology
                  </div>
                  <div class="school-address italic-text bold-text">
                    Da Nang
                  </div>
                </div>
                <div>
                  <div class="major uppercase italic-text">
                    Control engineering and automation
                  </div>
                  <div class="school-time italic-text">Aug.2013 - Jul.2018</div>
                </div>
                <ul class="school-result paddingleft-24">
                  <li>
                    GPA: <span class="bold-text">3.0/4.0</span>{" "}
                  </li>
                  <li>
                    TOEIC: <span class="bold-text">730</span>{" "}
                  </li>
                </ul>
              </div>
              <div class="high-school margintop-16">
                <div class="school uppercase bold-text">
                  Nguyen Binh Khiem gifted high school
                </div>
                <div class="school-address italic-text bold-text">
                  Quang Nam
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container experience-container">
          <div class="experience">
            <div class="content-header uppercase">
              <i class="icon fas fa-briefcase"></i>Experience
            </div>
            <div class="experience-text margintop-16 paddingleft-16">
              <div class="marginbottom-16">
                <div>
                  <a
                    href="https://iviettech.vn/"
                    class="company uppercase bold-text"
                    target="_blank"
                  >
                    <i class="icon fas fa-edit"></i>Iviettech Profesional IT
                    Training Center
                  </a>
                  <div class="company-address italic-text bold-text">
                    Da Nang
                  </div>
                </div>
                <div>
                  <div class="dept uppercase italic-text bold-text">
                    Front-end cource{" "}
                  </div>
                  <div class="company-time italic-text">
                    {" "}
                    Dec.2021 - Present{" "}
                  </div>
                </div>
                <ul class="vtd-cource paddingleft-24">
                  <li>Html, Css, Javascript, ReactJS</li>
                  <li>
                    Project:
                    <ul class="project-list paddingleft-16">
                      <li class="project-item">
                        {" "}
                        <a
                          class="mycv"
                          href="https://phatprotk9.github.io/"
                          target="_blank"
                        >
                          My CV: Make a CV and deploy it to Github
                          <i class="icon-right fas fa-external-link-alt"></i>
                        </a>
                      </li>
                      <li class="project-item">
                        {" "}
                        <a
                          class=""
                          onClick="return false"
                          href=""
                          target="_blank"
                        >
                          Project 2
                          <i class="icon-right fas fa-external-link-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="marginbottom-16">
                <div>
                  <div class="company uppercase bold-text">
                    <i class="icon fas fa-edit"></i>TCIE VIET NAM PTE. LTD.
                  </div>
                  <div class="company-address italic-text bold-text">
                    Da Nang
                  </div>
                </div>
                <div>
                  <div class="dept uppercase italic-text">
                    <span class="bold-text">Maintenance Department</span> -
                    Supervisor
                  </div>
                  <div class="company-time italic-text">
                    {" "}
                    Aug.2019 - Mar.2022{" "}
                  </div>
                </div>

                <div class="div">Main responsibility:</div>
                <ul class="paddingleft-24">
                  <li>Programming for machines with ladder language (PLC)</li>
                  <li>
                    Working with foreigner contractor to install the new device
                    & system
                  </li>
                  <li>Managing the Utility & ELV system</li>
                  <li>Managing the power & water consumption of company</li>
                  <li>
                    Managing the daily, monthly & yearly report of the
                    Department
                  </li>
                  <li>Managing the cost reduction projects of whole company</li>
                </ul>
              </div>
              <div class="marginbottom-16">
                <div>
                  <div class="company uppercase bold-text">
                    <i class="icon fas fa-edit"></i>MABUCHI MOTOR DANANG LIMITED
                  </div>
                  <div class="company-address italic-text bold-text">
                    Da Nang
                  </div>
                </div>
                <div>
                  <div class="dept uppercase italic-text">
                    <span class="bold-text">Maintenance Department</span> -
                    Technician
                  </div>
                  <div class="company-time italic-text">
                    Aug.2018 - Jun.2019
                  </div>
                </div>

                <div class="div">Main responsibility:</div>
                <ul class="paddingleft-24">
                  <li>Programming for machines with ladder language (PLC)</li>
                  <li>
                    Designing and editing the mechanical & electrical drawing by
                    Auto CAD
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-container">
          <div class="contact bold-text italic-text">Contact me</div>
          <div>
            <a
              href="https://www.facebook.com/mai.thinhphat"
              class="facebook"
              target="_blank"
            >
              <i class="fab fab fa-facebook"></i>
            </a>
            <a href="https://t.me/phatprotk9" class="telegram" target="_blank">
              <i class="fab fa-telegram"></i>
            </a>
            <a
              href="https://twitter.com/MaiThinhPhat"
              class="twitter"
              target="_blank"
            >
              <i class="fab fa-twitter-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/phat-mai-03670b134"
              class="linkedin"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/phatprotk9"
              class="github"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a href="" class="discord" onclick="return false" target="_blank">
              <i class="fab fa-discord"></i>
            </a>
            <a
              href="https://medium.com/@maithinhphat.tdh"
              class="medium"
              target="_blank"
            >
              <i class="fab fa-medium-m"></i>
            </a>
            <a
              href="mailto:maithinhphat.tdh@gmail.com"
              class="email-icon"
              target="_blank"
            >
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
