import React, { createContext } from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage'

type LoginContextType = {
	login: null | string
	changeLogin: (value: null | string) => void
}

export const LoginContext = createContext<LoginContextType | null>(null)

type IProps = {
	children: React.ReactNode
}

const LoginContextProvider: React.FC<IProps> = ({ children }) => {
	const [login, setLogin] = useLocaleStorage<null | string>('login', null)

	const changeLogin = (value: null | string) => {
		setLogin(value)
	}

	return (
		<LoginContext.Provider value={{ login, changeLogin }}>
			{children}
		</LoginContext.Provider>
	)
}

export default LoginContextProvider
