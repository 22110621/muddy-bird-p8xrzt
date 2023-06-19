import { useParams } from "react-router-dom";
import projects from "./data/projects";
import './assets/scss/project.scss'
import Input from './components/Input'
import Knob from './components/project_knobs'
import Container from "./components/container";
import Row from "./components/row";

function Project() {
    const project = projects.filter(project => project.url === useParams().project)[0]

    const openProject = () => window.open(project.homepage)
    return (
        <div className="view-project">
            <div className="section">
                <div className="section-content">
                    <h1>{project.title}</h1>
                    <p>{project.shortdescription}</p>
                    <button className="btn-primary" onClick={openProject}>View Website</button>
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
            <div className="project-goals">
                <div className="goals__title">
                    <h1>Goals for {project.title}</h1>
                </div>
                <div className="goal__target">
                    <p>Current goal: Building a cloud platform</p>
                </div>
                <div className="goal__progress">
                    <div className="progress__bar__container main">
                        <h3>Stage: 25%</h3>
                        <Input type={"progress"} className={"progress__bar"} value={25} max={100} disabled/>                        
                    </div>
                    <Container>
                        <Row gap={5}>
                            <div className="progress__bar__container">
                                <Knob percentage={50} show />
                            </div>
                            <div className="progress__bar__container">
                                <Knob percentage={45} show />
                            </div>
                            <div className="progress__bar__container">
                                <Knob percentage={25} show />
                            </div>
                            <div className="progress__bar__container">
                                <Knob percentage={15} show />
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="project-about">
                <Container>
                    <Row>
                        <div className="project-information">
                            <h1>What is {project.title}</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="project-information">
                            <h1>What is {project.title}</h1>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Project