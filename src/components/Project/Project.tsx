import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Aparna2547/ElysianBook-Client" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://elysianbook.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>ELYSIAN BOOK : Virtual booking application for beauty parlours</h3>
              <p> Developed a virtual booking  app using React, Redux, Redux-Toolkit,Tailwind CSS TypeScript, Node.js, Express.js, MongoDB ,Stripe Payment Integration, socket.io, jsonWebtoken , GoogleAuth, geopify, enabling users to view beauty parlours, see the services , booking an appointment ,chat with the parlours, cancel appointment and refund  through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Express.js</li> <li>TypeScript</li> <li>React</li> <li>MongoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Aparna2547/SkinCharm" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://skincharm.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Skincharm: Ecommerce website for face cream products</h3>
              <p>
                Developed an ecommerce application using Node.js, Express.js,JavaScript, HTML, CSS , Bootstrap, Multer, Sharp ,Cloudinary ,Razorpay specializing in beauty products and services for women. Users can explore the website and conveniently order their preferred grooming products and services, all while enjoying an immersive browsing experience tailored to their needs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Aparna2547/weather-app" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Weather App</h3>
              <p>
                Developed a weather app using React, Typescript, Node.js, Express.js, in clean architechure. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Clean Architecture</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Aparna2547/UserManagementSystem-React" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>User Management System</h3>
              <p>This is an user management system using react-redux , Node.js, Express.js ,MongoDB and jwt. While user can sign up and sign in and it has admin side admin can block the user </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Aparna2547/Netflix-React" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Netflix : clone</h3>
              <p>Developed a clone of netflix just experience the UI</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Aparna2547/olx-react" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>OLX Clone</h3>
          <p>Clone of OLX created using React as frontend and firebase as backend. User can login and signup and sell their product through this app. </p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Firebase</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
              <a href="https://github.com/Aparna2547/camerryweb/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://aparna2547.github.io/camerryweb/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Camerry : clone</h3>
              <p>Developed a clone of camery  just experience the UI. It is static website</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>Bootstrap</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        

        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
              <a href="https://github.com/Aparna2547/kopikonew" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://aparna2547.github.io/kopikonew/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Kopiko : clone</h3>
              <p>Developed a Kopiko clone  just experience the UI. It is static website</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>Bootstrap</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}