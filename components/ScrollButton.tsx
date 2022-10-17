import React, { useState, useRef, useEffect } from 'react'

export const ScrollButton = () => {

	const scrollButton = useRef(null)
	const [visible, setVisible] = useState(false)
	
	const handleScroll = () => {
		setVisible(window.scrollY > 0)
	}

	const handleButton = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => { window.removeEventListener('scroll', handleScroll) }
	})

	return <button className="scrollBtn" hidden={!visible} ref={scrollButton} onClick={handleButton}>Haut de page</button> 
	
}



