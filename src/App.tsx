import { useState } from 'react'
import './assets/scss/App.scss'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { getMovies } from './services/MovieAPI'
import { Movie } from './types'

type User = {
	username: string
	password: string
}

const queryClient = new QueryClient()

const App = () => {
	// user state
	const [user, setUser] = useState<User>({ username: '', password: '' })
	const [loggedIn, setLoggedIn] = useState(false)
	const [movies, setMovies] = useState<Movie[]>([])

	// when user submits form update state for 'user'
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const movies = await getMovies()
		setMovies(movies)

		setLoggedIn(true)
	}

	return (
		<QueryClientProvider client={queryClient}>
			<div className='App container'>
				{!loggedIn
					? (
						<form
							id='login-form'
							className='mt-5'
							onSubmit={handleSubmit}
						>
							<label htmlFor='username'>Email</label>
							<input
								type='text'
								id='username'
								onChange={e => setUser({ ...user, username: e.target.value })}
								value={user.username}
							/>

							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								onChange={e => setUser({ ...user, password: e.target.value })}
								value={user.password}
							/>

							<button className='btn btn-success' type='submit'>Log in</button>
						</form>
					)
					: <div>WELCOME {user.username}</div>
				}
			</div>
		</QueryClientProvider>
	)
}

export default App
