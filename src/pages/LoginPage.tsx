import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { User } from '../types/user'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import useLocaleStorage from '../hooks/useLocaleStorage'

const LoginPage = () => {
	// user state
	const [user, setUser] = useState<User>({ username: '', password: '' })
	const [isLoggedIn, setIsLoggedIn] = useLocaleStorage<false | string>('login', false)

	const navigate = useNavigate()

	const handleLogIn = async (e: React.FormEvent) => {
		e.preventDefault()

		setIsLoggedIn(user.username)

		navigate('/movies')
	}

	const handleLogOut = () => {
		setIsLoggedIn(false)
		setUser({ username: user.username, password: '' })
	}

	console.log(user)
	return (
		<div className='d-flex flex-column align-items-center'>
			{!isLoggedIn
				? (
					<LoginForm
						onSubmit={handleLogIn}
						user={user}
						defineUser={(data: User) => setUser(data)}
					/>
				)

				: (
					<>
						<span>Logged in as:</span>

						<h1>{user.username}</h1>

						<Button
							variant='danger'
							onClick={handleLogOut}
						>Log out</Button>
					</>
				)
			}
		</div>
	)
}

export default LoginPage
