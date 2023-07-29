import React, { useState, useEffect } from 'react'

interface IProps {
	handleSubmit: (username: string, password: string) => void
	btnText: string
	generalAlert: false | string
	usernameMinLength: number
	passwordMinLength: number
	preLoadedUsername: string
}

const LoginForm: React.FC<IProps> = ({ handleSubmit, btnText, generalAlert, usernameMinLength = 0, passwordMinLength = 0, preLoadedUsername }) => {
	const [username, setUsername] = useState(preLoadedUsername)
	const [password, setPassword] = useState('')
	const [usernameAlert, setUsernameAlert] = useState('')
	const [passwordAlert, setPasswordAlert] = useState('')

	const invalidUsername = username.length < usernameMinLength
	const invalidPassword = password.length < passwordMinLength

	useEffect(() => {
		setUsernameAlert('')
		setPasswordAlert('')

		if (invalidUsername && username.length > 0) {
			setUsernameAlert('Username must be at least 3 characters')
		}
		else if (invalidPassword && password.length > 0) {
			setPasswordAlert('Password must be at least 8 characters')
		}

	}, [invalidUsername, invalidPassword, username, password])

	return (
		<>
			{generalAlert && <span className='text-danger mb-2'>{generalAlert}</span>}

			<form
				className='login-form'
				onSubmit={e => {
					e.preventDefault()

					setPassword('')
					handleSubmit(username, password)
				}}
			>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					className='mb-2'
					id='username'
					onChange={e => setUsername(e.target.value)}
					value={username}
					required
				/>

				{usernameAlert && <span className='text-danger mb-2 small-text'>{usernameAlert}</span>}

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					className='mb-2'
					id='password'
					onChange={e => setPassword(e.target.value)}
					value={password}
					required
				/>

				{passwordAlert && <span className='text-danger mb-2 small-text'>{passwordAlert}</span>}

				<button className='btn btn-success mb-2 ms-5 me-5' type='submit' disabled={invalidUsername || invalidPassword}>{btnText}</button>
			</form >
		</>
	)
}

export default LoginForm
