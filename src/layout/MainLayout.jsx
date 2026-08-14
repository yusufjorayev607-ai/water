import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import ScrollTop from '../components/scrollTop/ScrollTop'

function MainLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
			<ScrollTop />
		</>
	)
}

export default MainLayout
