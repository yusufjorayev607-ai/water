import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './catigories.css'
function Catigories() {
	const { t } = useTranslation()

	const categories = [
		{
			id: 1,
			category: 'honadon-uchun',
			title: 'honadon-uchun',
			image: 'image/123.png',
		},
		{
			id: 2,
			category: 'magestral',
			title: 'magestral',
			image: 'image/123.png',
		},
		{
			id: 3,
			category: 'korhonalar',
			title: 'korhonalar',
			image: 'image/123.png',
		},
		{
			id: 4,
			category: 'katrij',
			title: 'katrij',
			image: 'image/123.png',
		},
	]

	return (
		<section className='catigorie container' id='catigories'>
			<h2 className='catigorie__title'>{t('catigorie.title')}</h2>

			<div className='catigorie__image'>
				{categories.map(item => (
					<Link
						key={item.id}
						to={`/products?category=${item.category}&title=${item.title}`}
						className='catigorie__image-item'
					>
						<img
							src={item.image}
							alt={item.title}
							className='catigorie__image-img'
							width={250}
						/>
						<h3 className='catigorie__image-title'>
							{t(`catigorie.categories.${item.title}`)}
						</h3>
					</Link>
				))}
			</div>
			<div className='catigorie__image'>
				{categories.map(item => (
					<Link
						key={item.id}
						to={`/products?category=${item.category}&title=${item.title}`}
						className='catigorie__image-item-dark'
					>
						<img
							src={item.image}
							alt={item.title}
							className='catigorie__image-img'
							width={250}
						/>
						<h3 className='catigorie__image-title'>
							{t(`catigorie.categories.${item.title}`)}
						</h3>
					</Link>
				))}
			</div>
		</section>
	)
}

export default Catigories
