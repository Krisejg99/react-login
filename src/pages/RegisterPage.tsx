import { useNavigate } from "react-router"
import { useState } from 'react'
import RegisterForm from "../components/LoginForm"
import { createUser, getUser } from "../services/UserAPI"
import { Link } from "react-router-dom"

const RegisterPage = () => {
	const [userInputUsername, setUserInputUsername] = useState<string>('')
	const [userInputPassword, setUserInputPassword] = useState<string>('')
	const [invalidRegister, setInvalidRegister] = useState(false)

	const navigate = useNavigate()

	return (
		<div className='d-flex flex-column align-items-center'>
			<h1 className='mb-5'>Register</h1>

			<RegisterForm
				onSubmit={async (e: React.FormEvent) => {
					e.preventDefault()

					// const user = await getUser(userInputUsername)
					// if (user) {
					// 	return setInvalidRegister(true)
					// }

					const registeredUser = await createUser(userInputUsername, userInputPassword)
					console.log(registeredUser)

					navigate(-1)
				}}
				user={{ username: userInputUsername, password: userInputPassword }}
				updateUsername={(username) => setUserInputUsername(username)}
				updatePassword={(password) => setUserInputPassword(password)}
				invalidDetails={invalidRegister}
				btnText='Register'
			/>

			<small>Already have an account? <Link to={'/login'}>Login</Link></small>
			<small>Not sure? Yikes</small>
		</div >
	)
}

export default RegisterPage
