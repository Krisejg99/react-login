import React, { } from 'react'
import { User } from '../types'

interface IProps {
	onSubmit: (e: React.FormEvent) => Promise<void>
	user: User
	updateUsername: (username: string) => void
	updatePassword: (password: string) => void
	invalidLoginDetails: boolean

}

const LoginForm: React.FC<IProps> = ({ onSubmit, user, updateUsername, updatePassword, invalidLoginDetails }) => {
	return (
		<>
			<h1 className='mb-5'>Login</h1>

			{invalidLoginDetails && (
				<span className='text-danger mb-2'>Incorrect password or username</span>
			)}

			<form
				className='login-form'
				onSubmit={onSubmit}
			>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					className='mb-2'
					id='username'
					onChange={e => updateUsername(e.target.value)}
					value={user.username}
					required
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					className='mb-2'
					id='password'
					onChange={e => updatePassword(e.target.value)}
					value={user.password}
				/>

				<button className='btn btn-success mb-2 ms-5 me-5' type='submit'>Log in</button>
			</form>
		</>
	)
}

export default LoginForm
