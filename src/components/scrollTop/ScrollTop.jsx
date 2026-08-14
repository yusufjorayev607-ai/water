import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './scrollTop.css'

function ScrollTop() {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShow(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<button
			className={`scroll-top ${show ? 'show' : ''}`}
			onClick={scrollToTop}
		>
			<FaArrowUp />
		</button>
	)
}

export default ScrollTop
