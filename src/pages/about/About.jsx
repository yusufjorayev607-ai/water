import { Link } from 'react-router-dom'
import './about.css'

function About() {
	return (
		<section className='about container' id='about'>
			<div className='about__content'>
				<h2 className='about__content-title'>Biz haqimizda</h2>
				<p className='about__content-didcription'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
					incidunt distinctio eaque veniam, veritatis numquam aperiam alias unde
					fugit necessitatibus aliquam quam possimus a, consectetur corporis
					nisi, tempora eius. Officia possimus, expedita, aliquam accusantium
					labore quidem aspernatur ratione, consequatur totam quibusdam
					assumenda! Id
				</p>
				<Link to='/about/details' className='about__content-link glass-btn'>
					Batafsil
				</Link>
			</div>
			<div className='about__image'>
				<img src='/image/about-img.webp' alt='' className='about__img' />
			</div>
		</section>
	)
}

export default About
