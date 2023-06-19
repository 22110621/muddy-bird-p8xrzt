import {  } from 'react'
import networking from './assets/img/networking/networking.png'
import './assets/scss/theme.scss'
import KaliCloudImg from './assets/img/projects/kalicloud.png'
import Projects from './components/projects'

function App() {
  return (
    <div>   
    <div className="hero">
      <div className="hero-section">
        <div className="hero-title">
          <h1>Who am I?</h1>
        </div>
        <div className="hero-image">
          <img src="https://yourlawnwise.com/wp-content/uploads/2017/08/photo-placeholder.png" alt="Hero Banner Image" />
        </div>
        <div className="hero-content">
          <p>I am JD (Jake Davies) I have been in the IT space for around 6 years now, originally starting off in C# application development and building websites using HTML and Javascript. I have moved onto bigger ambitions and learning more about current technolegy, that's why I have gradually started to shift my knowledge onto bigger stuff such as Php and then frameworks such as React and Angular.</p>
          <br />
          <p>
            At this time I was learning about the efficient ways to build faster projects and how to prepare myself for the next generation(s) of technolegy,
             during this time I was still in high school and working towards my future in the industry, this is also when I started to work on some real world projects in order to get prepared for my future job. 
             Some of which were: GMAD and GMAD interactive, these projects were not for revenue and were my learning steps, these projects are on the <a href="/projects" className='link'>Projects page</a>        
          </p>
          <br />
          <p>I have learned many things during my initial years of learning IT, most importantly I have learned many skills along the way, including
            <ul>
              <li>Azure,</li> 
              <li>AWS,</li>
              <li>Web development,</li>
              <li>Application development,</li>
              <li>Firebase,</li>
              <li>Databases</li>
              <li>...</li>
            </ul>
          </p>          
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-title">
          <h1>The mission</h1>                
        </div>            
        <div className="hero-image">
          <img src={networking} alt="Hero Banner Image" />
        </div>
        <div className="hero-content">
          <p>My mission is to help people and organizations to achieve their goals and to help them to achieve their goals. I am a self taught developer and I am constantly learning new things and trying to improve myself.</p>
          <br />
          <p>I am currently working on a new project, this project is called <a href="/projects/cloud" className='link'>KaliCloud</a> and it is a cloud computing platform that allows users to create their own virtual machines and manage them. This project is currently in development and will allow people to access and learn how to deploy their own cloud easier than ever before.</p>
          <br />
          <p>I want to help new or experienced IT students or experts, or simpliy someone who needs to deploy infrastructure. By opening doors that will fast track their career and help them to achieve their goals. This project will be a milestone for making cloud technolegy accessable to anyone and anywhere.</p>
          <br />
          <p>This project has been many months in the making and have granted me more knowledge about the cloud, this is an very ambitous project and I want to share my skills and my knowledge in order to make a difference in how we build and deploy applications, websites and servers...                  
          </p>
          <br />
          <p>Click for full details <a href="/it/mission" className="link">Mission</a></p>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="section-content">
        <h1>My work and projects</h1>
        <p>This is my list of individial projects and my work which I have done in college</p>
      </div>        
      <div className="bubbles">
        <div className="bubble large" />
        <div className="bubble large" />
        <div className="bubble small" />
        <div className="bubble small" />
        <div className="bubble large" />
        <div className="bubble large" />
        <div className="bubble large" />
        <div className="bubble small" />
        <div className="bubble small" />
      </div>        
    </div>
    <div className="industry">
      <h1 className="heading">My IT Career</h1>
      <div className="project-filter">
        <div className="filter">
          <h3>Filter by present projects</h3>
          <div className="toggle-switch">
            <label>
              <input type="checkbox" />
              <span className="slider" />
            </label>
          </div>
        </div>
        <div className="filter">
          <h3>Filter by Scale - high to low</h3>
          <div className="toggle-switch">
            <label>
              <input type="checkbox" />
              <span className="slider" />
            </label>
          </div>
        </div>
      </div> 
      <div className="projects">
        <Projects limit={3} showTag />
      </div>
    </div>
    <div className="modal photo-viewer" id="viewer">
      <div className="modal-close">
        <button data-modal-close="viewer">X</button>
      </div>
      <div className="modal-title">
        <h2>Modal Title</h2>            
      </div>
      <div className="modal-content">
        <div className="photo-box">
          <img src={KaliCloudImg} alt="The Kali Cloud" />
        </div>            
      </div>
      <div className="modal-footer">
        <p>A photo of the kali cloud</p>
      </div>
    </div>
  </div>
  )
}

export default App
