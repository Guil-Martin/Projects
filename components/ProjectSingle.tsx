import React from 'react';

export const ProjectSingle = ({ project_data }) => {

	const { title, tech, desc, imgs, github } = project_data

	return (
		<>
			<h1 className='title'>{ title }</h1>
			<div className='tech'>
				{
					tech.map((ele, i) => {
						return <img key={i} className="techicon" src={ "./images/icons/" + ele.src } title={ ele.title } alt={ ele.title } />
					})
				}
			</div>
			{
				github != "" && 
				<a href={ github } className="github">
					<img className="giticon" alt={"GitHub " + title} title={"GitHub " + title} src="./images/icons/github.png" />
					<div className="">{"GitHub - " + title}</div>
				</a>
			}
			<div className='description'>{ 
					desc.map((ele, i) => {
						return <p key={i}>{ele}</p> 
					})
				}
			</div>
			<div className='projectImgs'>
				{
					imgs.map((ele, i) => {
						return <img key={i} className="projectImg" src={"./images/" + ele.src } title={ ele.title } alt={ ele.title }/>
					})
				}
			</div>
		</>
	);
}