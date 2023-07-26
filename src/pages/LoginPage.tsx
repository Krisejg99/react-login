import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import useLocaleStorage from '../hooks/useLocaleStorage'
import { getUser } from '../services/UserAPI'
import useLoginContext from '../hooks/useLoginContext'

const LoginPage = () => {
	const [login, setLogin] = useLocaleStorage<null | string>('login', null)
	const [invalidLogin, setInvalidLogin] = useState<false | string>(false)
	const navigate = useNavigate()
	const loginContext = useLoginContext()

	const checkUserInDB = async (username: string) => {
		const user = await getUser(username)

		if (!user) {
			setInvalidLogin('Incorrect password or username')
			return null
		}

		return user
	}

	const handleSubmit = async (username: string, password: string) => {
		const user = await checkUserInDB(username)
		if (!user) return

		loginContext.changeLogin(username)
		navigate(-1)
	}

	useEffect(() => {
		if (!login) return

		(async () => {
			const user = await checkUserInDB(login)

			user ? setLogin(user.username) : setLogin(null)
		})()

	}, [login, setLogin])

	return (
		<div className='d-flex flex-column align-items-center'>
			{!loginContext.login
				? (
					<>
						<h1 className='mb-5'>Login</h1>

						<LoginForm
							handleSubmit={(username: string, password: string) => handleSubmit(username, password)}
							btnText='Login'
							generalAlert={invalidLogin}
						/>

						<small>Don't have an account? <Link to={'/register'}>Register</Link></small>
						<small>Forgot your password? Yikes</small>
					</>
				)

				: (
					<>
						<span>Logged in as:</span>

						<h1>{login}</h1>

						<Button
							variant='danger'
							onClick={() => {
								loginContext.changeLogin(null)
								navigate(-1)
							}}
						>Log out</Button>
					</>
				)
			}
		</div>
	)
}

export default LoginPage
