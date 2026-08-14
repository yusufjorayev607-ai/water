import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher'
import ThemeToggle from '../themeToggle/ThemeToggle'
import './navbar.css'

function Navbar() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={scrolled ? 'navbar active container' : 'navbar container'}
		>
			<Link to='/' className='logo'>
				WATER-OSMOS
			</Link>
			<nav className='navigation'>
				<NavLink to='/' className='navigation__link'>
					Bosh sahifa
				</NavLink>
				<NavLink to='/products' className='navigation__link'>
					Mahsulotlar
				</NavLink>
				<NavLink to='/about/details' className='navigation__link'>
					Biz haqimizda
				</NavLink>
				<NavLink to='/products2ads' className='navigation__link'>
					Aloqa
				</NavLink>
			</nav>
			<div className='navbar__btns'>
				<LanguageSwitcher />
				<ThemeToggle />
			</div>
		</header>
	)
}

export default Navbar
