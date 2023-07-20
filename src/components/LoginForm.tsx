import React, { } from 'react'
import { User } from '../types'

interface IProps {
	onSubmit: (e: React.FormEvent) => Promise<void>
	user: User
	updateUsername: (username: string) => void
	updatePassword: (password: string) => void

}

const LoginForm: React.FC<IProps> = ({ onSubmit, user, updateUsername, updatePassword }) => {

	return (
		<>
			<h1>Login</h1>

			<form
				id='login-form'
				className='mt-5'
				onSubmit={onSubmit}
			>
				<label htmlFor='username'>Email</label>
				<input
					type='text'
					id='username'
					onChange={e => updateUsername(e.target.value)}
					value={user.username}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					onChange={e => updatePassword(e.target.value)}
					value={user.password}
				/>

				<button className='btn btn-success' type='submit'>Log in</button>
			</form>
		</>
	)
}

export default LoginForm
