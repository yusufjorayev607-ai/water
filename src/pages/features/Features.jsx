import './features.css'

function Features() {
	const services = [
		{
			slug: 'sprout',
			image: '/icons/light/sprout.svg',
			imageDarck: '/icons/darck/sprout-darck.svg',
		},
		{
			slug: 'heart-handshake',
			image: '/icons/light/heart-handshake.svg',
			imageDarck: '/icons/darck/heart-handshake-darck.svg',
		},
		{
			slug: 'database-zap',
			image: '/icons/light/database-zap.svg',
			imageDarck: '/icons/darck/database-zap-darck.svg',
		},
		{
			slug: 'wand-sparkles',
			image: '/icons/light/wand-sparkles.svg',
			imageDarck: '/icons/darck/wand-sparkles-darck.svg',
		},
	]
	return (
		<section className='features container'>
			<h2 className='features__title'>Nega bizni tanlaysiz?</h2>
			<div className='features__cards'>
				{services.map(service => (
					<div className='features__card' key={service.slug}>
						<img
							src={service.image}
							alt={service.slug}
							className='features__card-img'
							width='80'
						/>
						<img
							src={service.imageDarck}
							alt={service.slug}
							className='features__card-img__darck'
							width='80'
						/>
						<h2 className='features__card-title'>{service.slug}</h2>
						<p className='features__card-discription'>
							Lorem ipsum dolor sit amet
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Features
