import React, { useState } from 'react'

export const Modal = ({imageData, show, modalFunction}) => {

	if (!show) { return null; }

	const [currentImage, setCurrentImage] = useState(imageData.imgs[imageData.currentIndex])
	const imgLength = Object.keys(imageData.imgs).length

	// Close modal if escape key pressed
	const handleKeyModal = (e) => { if (e.keyCode == 27) {
		document.removeEventListener("keydown", handleKeyModal)
		modalFunction(null, 0, false) 
	}} 
	document.addEventListener("keydown", handleKeyModal, false)

	// Close modal if click on background
	const handleClickOut = (e) => { if (e.target.className === "modal") { modalFunction(null, 0, false) } } 

	// Navigate previous and next image by clicking on the left and the right of the image
	const handleClickModal = (e) => { 
		if (e.clientX < window.screen.width / 2) {
			if ((imageData.currentIndex - 1) < 0) { // Displays last image if it's the first image
				imageData.currentIndex = imgLength - 1
				setCurrentImage(imageData.imgs[imgLength - 1])
			} else if (imageData.imgs[imageData.currentIndex - 1]) { // Display previous image
				setCurrentImage(imageData.imgs[imageData.currentIndex - 1])
				imageData.currentIndex--
			}
		} else {
			if ((imageData.currentIndex + 1) == imgLength) { // Reset index if at the end
				imageData.currentIndex = 0 
				setCurrentImage(imageData.imgs[imageData.currentIndex])
			} else if (imageData.imgs[imageData.currentIndex + 1]) { // Display next image
				setCurrentImage(imageData.imgs[imageData.currentIndex + 1])
				imageData.currentIndex++
			}
		}
	}

	return (
		<div className="modal" onClick={handleClickOut}>
			<div className="modal-content">
			{
				imageData && <img className="modalImg" onClick={handleClickModal} src={ "./images/" + currentImage.src } title={ currentImage.title } alt={ currentImage.title }/>
			}
			</div>
			<div className="modalButtonCoutner">
				<button className="modalCloseBtn" onClick={ () => modalFunction(null, 0, false) }>Close</button>
				<div className="modalImgCounter">{imageData.currentIndex + 1} / { imgLength }</div>
			</div>
		</div> 
	)
}



