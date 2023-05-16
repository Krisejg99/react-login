import { useState } from 'react'
import './assets/scss/App.scss'

type User = {
	email: string
	password: string
}

const App = () => {
	// user state
	const [user, setUser] = useState<User>({ email: '', password: '' })

	// when user submits form update state for 'user'
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		// reset input fields
		setUser({ email: '', password: '' })
	}

	return (
		<div className='App container'>
			<form
				id='login-form'
				className='mt-5'
				onSubmit={handleSubmit}
			>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					onChange={e => setUser({ ...user, email: e.target.value })}
					value={user.email}
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
		</div>
	)
}

export default App
