import * as React from 'react'
import { createRoot } from 'react-dom/client';
import { Project } from './components/Project'

const App = () => {
    return (
		<>
			<Project Props='1'/>
		</>
	)
}

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />);