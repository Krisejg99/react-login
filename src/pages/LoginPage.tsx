import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { getUser } from '../services/UserAPI'
import useLoginContext from '../hooks/useLoginContext'

const LoginPage = () => {
	const [invalidLogin, setInvalidLogin] = useState<false | string>(false)
	const navigate = useNavigate()
	const { login, changeLogin } = useLoginContext()

	const checkUserInDB = async (username: string) => {
		const res = await getUser(username)
		return res ? res : null
	}

	const handleSubmit = async (username: string, password: string) => {
		const user = await checkUserInDB(username)

		console.log(user)

		if (!user || user.password !== password) {
			return setInvalidLogin('Incorrect password or username')
		}

		changeLogin(username)
		navigate('/')
	}

	return (
		<div className='d-flex flex-column align-items-center'>
			{!login
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
								changeLogin(null)
								navigate('/login')
							}}
						>Log out</Button>
					</>
				)
			}
		</div>
	)
}

export default LoginPage
