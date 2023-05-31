import { useState } from 'react'
import './assets/scss/App.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
import LoginForm from './components/LoginForm'
import MovieList from './components/MovieList'

export type User = {
	username: string
	password: string
}

const queryClient = new QueryClient()

const App = () => {
	// user state
	const [user, setUser] = useState<User>({ username: '', password: '' })
	const [loggedIn, setLoggedIn] = useState(false)

	const updateUser = (data: User) => setUser(data)

	// when user submits form update state for 'user'
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		setLoggedIn(true)
	}

	return (
		<QueryClientProvider client={queryClient}>
			<div className='App container'>
				{!loggedIn
					? (
						<>
							<h1>Login</h1>

							<LoginForm
								onSubmit={handleSubmit}
								user={user}
								defineUser={updateUser}
							/>
						</>
					)
					: (
						<>
							<h1>{user.username}'s Movie List</h1>

							<MovieList />
						</>
					)
				}
			</div>
		</QueryClientProvider>
	)
}

export default App
