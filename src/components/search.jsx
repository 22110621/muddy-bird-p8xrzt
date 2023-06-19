import { useState } from "react"
import projects from "../data/projects"

function Search() {
    const [ search, setSearch ] = useState("")
    return (
        <div className="search">
            <input type="text" placeholder="Search here..." className="search-box-custom" onChange={(e) => setSearch(e.target.value)} />
            {search && 
            <div className="search-results">
                <ul>
                    {projects.filter((project) => project.title.toLowerCase().includes(search)).map((item, idx) => (                        
                    <a href={`/projects/${item.url}`} className="search-item">
                        <h4>{item.title}</h4>
                    </a>
                    ))}
                </ul>
            </div>
            }
        </div>
    )
}

export default Search