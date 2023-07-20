import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import useLocaleStorage from '../hooks/useLocaleStorage'
import { getUser } from '../services/UserAPI'
import { LoginContext } from '../contexts/LoginContextProvider'
import { Link } from 'react-router-dom'

const LoginPage = () => {
	const [login, setLogin] = useLocaleStorage<null | string>('login', null)
	const [userInputUsername, setUserInputUsername] = useState<string>('')
	const [userInputPassword, setUserInputPassword] = useState<string>('')
	const [invalidLogin, setInvalidLogin] = useState(false)
	const navigate = useNavigate()

	const checkUserInDB = async (username: string) => {
		const user = await getUser(username)

		if (!user) {
			setInvalidLogin(true)
			return null
		}

		return user
	}

	useEffect(() => {
		if (!login) return

		(async () => {
			const user = await checkUserInDB(login)

			user ? setLogin(user.username) : setLogin(null)
		})()

	}, [login, setLogin])

	// console.log('username: ', userInputUsername, 'password: ', userInputPassword)

	return (
		<div className='d-flex flex-column align-items-center'>
			<LoginContext.Consumer>
				{loginContext => loginContext && !loginContext.login
					? (
						<>
							<LoginForm
								onSubmit={async (e: React.FormEvent) => {
									e.preventDefault()

									const user = await checkUserInDB(userInputUsername)
									if (!user) return

									loginContext.changeLogin(userInputUsername)
									navigate(-1)
								}}
								user={{ username: userInputUsername, password: userInputPassword }}
								updateUsername={(username) => setUserInputUsername(username)}
								updatePassword={(password) => setUserInputPassword(password)}
								invalidLoginDetails={invalidLogin}
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
									loginContext?.changeLogin(null)
									setUserInputPassword('')
									navigate(-1)
								}}
							>Log out</Button>
						</>
					)
				}
			</LoginContext.Consumer>
		</div >
	)
}

export default LoginPage
