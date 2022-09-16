import React, { useState, useRef } from 'react'
import { createRoot } from 'react-dom/client';
import { ProjectSingle } from './components/ProjectSingle'
import projects_list from './www/projects_list.json'

const App = () => {

	const projectAnchor = useRef(null)
	const [currProj, setCurrProj] = useState(0)

	const cb_select_proj = (index) => {
		setCurrProj(index)
		projectAnchor.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" })    
	}

    return (
		<>
			<div className="projectsBox">
			{
				projects_list.map((element, i) => {
					return (
						<div className={"projectCard proj"+i} key={i} onClick={() => cb_select_proj(i)}>
							<h2 className="cardTitle">{element.title}</h2>
							<div className="cardTech">
								{
									element.tech.map((ele, i) => {
										return <img key={i} className="cardTechIcon" src={ "/images/icons/" + ele.src } title={ ele.title } alt={ ele.title } />
									})
								}
							</div>
							<div className="cardImg">
								<img alt={element.title} title={element.title} src={"/images/"+element.imgs[0].src} />
							</div>
						</div>
					)
				})
			}
			</div>
			<div ref={projectAnchor}>
				<ProjectSingle  project_data={projects_list[currProj]} />
			</div>
		</>
	)
}

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />);