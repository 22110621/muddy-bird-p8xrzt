import Container from "./components/container";
import { useRouteError } from "react-router-dom";

function NotFound() {
    const error = useRouteError();
    
    return (
        <Container>
            <div className="page-not-found">
                <div className="main-content">
                    <div className="title">
                        <h1>It all looks empty here...</h1>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis odio dolores, a corrupti doloremque repellendus officia esse rem vel et quisquam, quae tempore provident iste fugit consectetur qui impedit vero?</p>
                    <div className="actions">
                        <button className="btn-primary">home</button>
                        <button className="btn-primary">View Projects</button>
                    </div>                    
                </div>
            </div>
        </Container>
    )
}

export default NotFound