import './banner.css'

function Banner() {
	return (
		<section className='container'>
			<div className='banner'>
				<img
					src='/image/img-banner-2.png'
					alt='Toza suv'
					className='banner__image'
				/>
				<img
					src='/image/img-banner.jpeg'
					alt='Toza suv'
					className='banner__image-dark'
				/>

				<div className='banner__content'>
					<h2 className='banner__content-title'>
						Suv sifatini yaxshilang,
						<br />
						hayot sifatini oshiring.
					</h2>

					<button className='banner__btn glass-btn'>
						Aloqa bog‘lanish
						<span>→</span>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Banner
