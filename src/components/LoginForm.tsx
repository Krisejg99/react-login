import React, { } from 'react'
import { User } from '../types/user'

interface IProps {
	onSubmit: (e: React.FormEvent) => Promise<void>
	user: User
	defineUser: (data: User) => void
}

const LoginForm: React.FC<IProps> = ({ onSubmit, user, defineUser }) => {

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
					onChange={e => defineUser({ ...user, username: e.target.value })}
					value={user.username}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					onChange={e => defineUser({ ...user, password: e.target.value })}
					value={user.password}
				/>

				<button className='btn btn-success' type='submit'>Log in</button>
			</form>
		</>
	)
}

export default LoginForm
