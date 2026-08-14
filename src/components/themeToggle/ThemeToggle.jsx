import { useEffect, useState } from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { LuMoonStar } from 'react-icons/lu'
import './themeToggle.css'

function ThemeToggle() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

	useEffect(() => {
		document.body.classList.remove('light', 'dark')
		document.body.classList.add(theme)

		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}

	return (
		<button className='theme-btn ' onClick={toggleTheme}>
			<div className={`theme-circle ${theme === 'dark' ? 'move' : ''}`}>
				{theme === 'light' ? <IoSunnyOutline /> : <LuMoonStar />}
			</div>
		</button>
	)
}

export default ThemeToggle
