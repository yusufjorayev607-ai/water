import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import './products.css'

function Products() {
	const { data, isPending, error } = useFetch('/data/product.json')

	const [searchParams] = useSearchParams()
	const { t } = useTranslation()

	const [selectedIndex, setSelectedIndex] = useState(null)

	if (isPending) return <h1>loader</h1>
	if (error) return <h1>Xatolik yuz berdi</h1>
	if (!data) return null

	const category = searchParams.get('category')
	const title = searchParams.get('title')

	const filteredPortfolio = category
		? data.portfolio.filter(item => item.category === category)
		: data.portfolio

	const openModal = index => {
		setSelectedIndex(index)
	}

	const closeModal = () => {
		setSelectedIndex(null)
	}

	const previousImage = () => {
		if (selectedIndex === null) return

		if (selectedIndex > 0) {
			setSelectedIndex(prev => prev - 1)
		}
	}

	const nextImage = () => {
		if (selectedIndex === null) return

		if (selectedIndex < filteredPortfolio.length - 1) {
			setSelectedIndex(prev => prev + 1)
		}
	}

	const selectedProduct =
		selectedIndex !== null ? filteredPortfolio[selectedIndex] : null

	return (
		<>
			<section className='product-wrapper container'>
				<div className='product-header'>
					<Link to='/' className='glass-btn'>
						<FaArrowLeft />
					</Link>
					<h2 className='product__title'>
						{title ? t(`catigorie.categories.${title}`) : t('catigorie.all')}
					</h2>
				</div>

				<div className='product'>
					{filteredPortfolio.map((item, index) => (
						<button
							key={item.slug}
							className='product-img-btn'
							onClick={() => openModal(index)}
						>
							<div className='product-img-wrapper'>
								<img
									src={item.image}
									alt={item.slug}
									width={300}
									className='product-img'
								/>
								<span className='product-price'>{item.price}</span>
							</div>
						</button>
					))}
				</div>
				<Link to='/' className='product-btn glass-btn'>
					{t('catigorie.backBtn')}
				</Link>
			</section>
			{selectedProduct && (
				<div className='product-modal-overlay' onClick={closeModal}>
					<div
						className='product-modal'
						onClick={event => event.stopPropagation()}
					>
						<div className='product-modal-header'>
							<h2>{t(`catigorie.categories.${selectedProduct.category}`)}</h2>
							<button
								className='product-modal-back glass-btn'
								onClick={closeModal}
							>
								<FaArrowLeft />
								<span>Ortga</span>
							</button>
						</div>
						<div className='product-modal-body'>
							<div className='product-modal-image-wrapper'>
								<img
									src={selectedProduct.image}
									alt={selectedProduct.slug}
									className='product-modal-image'
								/>
							</div>
							<div className='product-modal-info'>
								<h2 className='product-modal-title'>
									{t(`catigorie.${selectedProduct.slug}.title`)}
								</h2>
								<div className='product-modal-line'></div>
								<div className='product-modal-item'>
									<span>Kategoriya</span>
									<strong>
										{t(`catigorie.${selectedProduct.slug}.description`)}
									</strong>
								</div>

								<div className='product-modal-item'>
									<span>Narxi</span>
									<strong className='product-modal-price'>
										{selectedProduct.price}
									</strong>
								</div>
							</div>
						</div>
						<button
							className={`product-modal-arrow product-modal-prev ${
								selectedIndex === 0 ? 'disabled' : ''
							}`}
							onClick={previousImage}
							disabled={selectedIndex === 0}
							aria-label='Avvalgi mahsulot'
						>
							<FaChevronLeft />
						</button>

						<button
							className={`product-modal-arrow product-modal-next ${
								selectedIndex === filteredPortfolio.length - 1 ? 'disabled' : ''
							}`}
							onClick={nextImage}
							disabled={selectedIndex === filteredPortfolio.length - 1}
							aria-label='Keyingi mahsulot'
						>
							<FaChevronRight />
						</button>

						<div className='product-modal-counter'>
							{selectedIndex + 1} / {filteredPortfolio.length}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Products
