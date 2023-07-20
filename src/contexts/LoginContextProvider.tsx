import React, { createContext } from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage'

type LoginContextType = {
	login: false | string
	changeLogin: (value: false | string) => void
}

export const LoginContext = createContext<LoginContextType | null>(null)

type IProps = {
	children: React.ReactNode
}

const LoginContextProvider: React.FC<IProps> = ({ children }) => {
	const [login, setLogin] = useLocaleStorage<false | string>('login', false)

	const changeLogin = (value: false | string) => {
		setLogin(value)
	}

	console.log('login', login)

	return (
		<LoginContext.Provider value={{ login, changeLogin }}>
			{children}
		</LoginContext.Provider>
	)
}

export default LoginContextProvider
