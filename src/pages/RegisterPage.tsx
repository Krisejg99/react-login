import { useState } from 'react'
import RegisterForm from "../components/LoginForm"
import { createUser, getUser } from "../services/UserAPI"
import { Link } from "react-router-dom"

const RegisterPage = () => {
	const [invalidRegister, setInvalidRegister] = useState<false | string>(false)

	const handleSubmit = async (username: string, password: string) => {
		setInvalidRegister(false)

		const user = await getUser(username)

		if (user) {
			return setInvalidRegister('Account already exists with that username')
		}

		const registeredUser = await createUser(username, password)
		console.log(registeredUser)
	}

	return (
		<div className='d-flex flex-column align-items-center'>
			<h1 className='mb-5'>Register</h1>

			<RegisterForm
				handleSubmit={(username: string, password: string) => handleSubmit(username, password)}
				generalAlert={invalidRegister}
				btnText='Register'
				usernameMinLength={3}
				passwordMinLength={8}
			/>

			<small>Already have an account? <Link to={'/login'}>Login</Link></small>
			<small>Not sure? Yikes</small>
		</div >
	)
}

export default RegisterPage
