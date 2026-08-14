import './service.css'

function Service() {
	const services = [
		{
			slug: 'award',
			image: '/icons/light/award.svg',
			imageDarck: '/icons/darck/award-darck.svg',
		},
		{
			slug: 'shield-check',
			image: '/icons/light/shield-check.svg',
			imageDarck: '/icons/darck/shield-check-darck.svg',
		},
		{
			slug: 'truck-electric',
			image: '/icons/light/truck-electric.svg',
			imageDarck: '/icons/darck/truck-electric-darck.svg',
		},
		{
			slug: 'wrench',
			image: '/icons/light/wrench.svg',
			imageDarck: '/icons/darck/wrench-darck.svg',
		},
	]
	return (
		<section className='service container'>
			{services.map(service => (
				<div className='service__card' key={service.slug}>
					<img
						src={service.image}
						alt={service.slug}
						className='service__card-img'
						width='80'
					/>
					<img
						src={service.imageDarck}
						alt={service.slug}
						className='service__card-img__darck'
						width='80'
					/>
					<h2 className='service__card-title'>{service.slug}</h2>
					<p className='service__card-discription'>
						Lorem ipsum dolor sit amet
					</p>
				</div>
			))}
		</section>
	)
}

export default Service
