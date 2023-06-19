import ProjectGrid from "./components/projects"

function Projects() {
    return (
        <>
        <div className="section">
        <div className="section-content">
          <h1>My Projects</h1>
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
        <ProjectGrid limit={6} showTag />
        </div>
      </div>
      </>
    )
}

export default Projects