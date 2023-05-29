import { useState } from 'react'
import './assets/scss/App.scss'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { getMovies } from './services/MovieAPI'
import { Movie } from './types'
import LoginForm from './components/LoginForm'

export type User = {
	username: string
	password: string
}

const queryClient = new QueryClient()

const App = () => {
	// user state
	const [user, setUser] = useState<User>({ username: '', password: '' })
	const [loggedIn, setLoggedIn] = useState(false)
	const [movies, setMovies] = useState<Movie[]>([])

	const updateUser = (data: User) => setUser(data)

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
					? <LoginForm
						onSubmit={handleSubmit}
						user={user}
						defineUser={updateUser}
					/>
					: <div>WELCOME {user.username}</div>
				}
			</div>
		</QueryClientProvider>
	)
}

export default App
