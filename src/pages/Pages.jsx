import About from './about/About'
import Banner from './banner/Banner'
import Catigories from './catigories/Catigories'
import Features from './features/Features'
import Forma from './forma/Forma'
import Home from './home/Home'
import Service from './services/Service'

function Pages() {
	return (
		<>
			<Home />
			<Service />
			<Catigories />
			<Banner />
			<Features />
			<About />
			<Forma />
		</>
	)
}

export default Pages
