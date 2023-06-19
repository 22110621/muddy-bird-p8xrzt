import PropTypes from 'prop-types'
import projects from '../data/projects'

function Projects({ limit, showTag }) {

    const viewProject = ({ url }) => {
        window.open(`/projects/${url}`)
    }

    const viewProjects = () => {
        window.location.replace(`/projects`)
    }

    return (      
          <>        
           {projects.filter((item, idx) => idx < limit).map((project) => (
                <div className="project">
                  {showTag &&
                  <div className="project-tag current">
                     <p>{project.tag}</p>
                  </div>}
                  <div className="project-title">
                    <h1>{project.title}</h1>
                  </div>
                  <div className="project-description">
                    <p>{project.shortdescription}</p>
                  </div>
                  <div className="project-image">
                    <img src={project.image} alt={`The ${project.title}`} data-modal="viewer" />
                  </div>
                  <div className="project-actions">
                    <button className="action-btn">Visit Website</button>
                    <button className="action-btn" onClick={() => viewProject(project)}>View Details</button>
                  </div>
                </div>
                ))}
                {limit && projects.length >= limit && <button className="projects-load" onClick={viewProjects}>Load More...</button>}
            </>
    )
}

export default Projects

Projects.propTypes = {
    limit: PropTypes.number,
    showTag: PropTypes.bool
}