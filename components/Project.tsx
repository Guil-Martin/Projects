import React from 'react';
import { ProjectSingle } from './ProjectSingle';
import projects_list from '../www/projects_list.json'

export const Project = ({ Props }) => {
	return (
		<>
			{
				projects_list.map((element, i) => {
					return (<ProjectSingle obj_test={element} key={i} />)
				})
			}
		</>
	);
}