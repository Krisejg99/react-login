import { Container } from 'react-bootstrap'
import './assets/scss/App.scss'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ListPage from './pages/ListPage'

const App = () => {
	return (
		<div id='App' className='bg-dark text-white'>
			{/* <Navigation /> */}

			<Container className='py-3'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/list' element={<ListPage />} />

					<Route path='/*' element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
