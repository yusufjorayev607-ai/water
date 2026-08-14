import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineGlobeAlt } from 'react-icons/hi2'
import { IoChevronDown } from 'react-icons/io5'
import './languageSwitcher.css'

function LanguageSwitcher() {
	const { i18n } = useTranslation()
	const [open, setOpen] = useState(false)
	const menuRef = useRef(null)

	const languages = [
		{ code: 'uz', name: 'UZ' },
		{ code: 'en', name: 'EN' },
		{ code: 'ru', name: 'RU' },
	]

	const changeLanguage = lang => {
		i18n.changeLanguage(lang)
		localStorage.setItem('i18nextLng', lang)
		setOpen(false)
	}

	useEffect(() => {
		const handleClickOutside = e => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setOpen(false)
			}
		}

		const handleEsc = e => {
			if (e.key === 'Escape') {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('keydown', handleEsc)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('keydown', handleEsc)
		}
	}, [])

	return (
		<div className='language' ref={menuRef}>
			<button className='language-btn' onClick={() => setOpen(prev => !prev)}>
				<HiOutlineGlobeAlt className='globe' />

				<span>{(i18n.resolvedLanguage || 'uz').toUpperCase()}</span>

				<IoChevronDown className={open ? 'arrow activ' : 'arrow'} />
			</button>

			{open && (
				<div className='language-menu'>
					{languages.map(lang => (
						<button
							key={lang.code}
							onClick={() => changeLanguage(lang.code)}
							className={
								i18n.resolvedLanguage === lang.code ? 'active-language' : ''
							}
						>
							{lang.name}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default LanguageSwitcher
