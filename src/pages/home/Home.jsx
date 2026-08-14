import { IoPlayOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
	return (
		<section className='home container'>
			<div className='home__content'>
				<span className='home__middle__title'>SIZ VA OILA UCHUN</span>
				<h2 className='home__title'>Toza suv - sof hayot</h2>
				<p className='home__discription'>
					Zamonaviy suv filtrlari va ishonchli xizmatler siz uchun
				</p>
				<div className='home__btns'>
					<Link to='/products' className='home__btn-link glass-btn'>
						Mahsulotlarni korish
					</Link>
					<IoPlayOutline className='home__btn-play glass-btn' />
				</div>
			</div>
			<div className='home__image'>
				<img src='/image/123.png' alt='' />
			</div>
		</section>
	)
}

export default Home
