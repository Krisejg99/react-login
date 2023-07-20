import React, { createContext } from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage'

type LoginContextType = {
	isLoggedIn: boolean
	toggleIsLoggedIn: () => void
}

export const LoginContext = createContext<LoginContextType | null>(null)

type IProps = {
	children: React.ReactNode
}

const LoginContextProvider: React.FC<IProps> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useLocaleStorage<boolean>('isLoggedIn', false)

	const toggleIsLoggedIn = () => {
		setIsLoggedIn(!isLoggedIn)
	}

	console.log(isLoggedIn)

	return (
		<LoginContext.Provider value={{ isLoggedIn, toggleIsLoggedIn }}>
			{children}
		</LoginContext.Provider>
	)
}

export default LoginContextProvider
