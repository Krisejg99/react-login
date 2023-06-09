import { Container } from 'react-bootstrap'
import './assets/scss/App.scss'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MoviesPage from './pages/MoviesPage'
import Navigation from './components/Navigation'

const App = () => {
	return (
		<div id='App' className='bg-dark text-white'>
			<Navigation />

			<Container className='py-3'>
				<Routes>
					<Route path='/' element={<MoviesPage />} />
					<Route path='/movies' element={<MoviesPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />

					<Route path='/*' element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
