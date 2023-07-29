import { useState } from 'react'
import RegisterForm from "../components/LoginForm"
import { createUser, getUser } from "../services/UserAPI"
import { Link, useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap'

const RegisterPage = () => {
	const [invalidRegister, setInvalidRegister] = useState<false | string>(false)
	const [successfullRegister, setSuccessfullRegister] = useState<false | string>(false)
	const navigate = useNavigate()

	const handleSubmit = async (username: string, password: string) => {
		setInvalidRegister(false)

		const user = await getUser(username)

		if (user) {
			return setInvalidRegister('Account already exists with that username')
		}

		const registeredUser = await createUser(username, password)
		console.log(registeredUser)

		setSuccessfullRegister(username)
	}

	return (
		<div className='d-flex flex-column align-items-center'>
			{successfullRegister
				? <>
					<h1>Thanks for joining us!</h1>
					<span>Registered as:</span>
					<h2>{successfullRegister}</h2>
					<Button
						onClick={() => {
							navigate('/login', {
								state: {
									newUser: successfullRegister,
								},
								replace: true,
							})
						}}
					>Log in</Button>
				</>

				: <>
					<h1 className='mb-5'>Register</h1>

					<span>WARNING!</span>
					<p>Do not use a real password</p>

					<RegisterForm
						handleSubmit={(username: string, password: string) => handleSubmit(username, password)}
						btnText='Register'
						generalAlert={invalidRegister}
						usernameMinLength={3}
						passwordMinLength={8}
						preLoadedUsername=''
					/>

					<small>Already have an account? <Link to={'/login'}>Login</Link></small>
					<small>Not sure? Yikes</small>
				</>
			}
		</div>
	)
}

export default RegisterPage
