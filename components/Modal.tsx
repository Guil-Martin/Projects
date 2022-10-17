import React, { useState, useRef, useEffect } from 'react'

export const Modal = ({imageData, show, modalFunction}) => {

	if (!show) { return null; }

	return (
		<div className="modal">
			<div className="modal-content">
			{
				imageData && <img className="modalImg" src={ "./images/" + imageData.src } title={ imageData.title } alt={ imageData.title }/>
			}
			</div>
			<button className="close" onClick={ () => modalFunction(null, false) }>Close</button>
		</div> 
	)
}



