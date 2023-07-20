import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import useLocaleStorage from '../hooks/useLocaleStorage'
import { getUser } from '../services/UserAPI'
import { LoginContext } from '../contexts/LoginContextProvider'

const LoginPage = () => {
	const [login, setLogin] = useLocaleStorage<null | string>('login', null)
	const [userInputUsername, setUserInputUsername] = useState<string>('')
	const [userInputPassword, setUserInputPassword] = useState<string>('')
	const navigate = useNavigate()

	const getDBUser = async (username: string) => {
		const user = await getUser(username)
		setUserInputUsername(user.username)
	}

	useEffect(() => {
		if (!login) return

		getDBUser(login)

	}, [login])

	console.log('username: ', userInputUsername, 'password: ', userInputPassword)

	return (
		<div className='d-flex flex-column align-items-center'>
			<LoginContext.Consumer>
				{loginContext => loginContext && !loginContext.login
					? (
						<LoginForm
							onSubmit={async (e: React.FormEvent) => {
								e.preventDefault()

								loginContext.changeLogin(userInputUsername)
								navigate(-1)
							}}
							user={{ username: userInputUsername, password: userInputPassword }}
							updateUsername={(username) => setUserInputUsername(username)}
							updatePassword={(password) => setUserInputPassword(password)}
						/>
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
