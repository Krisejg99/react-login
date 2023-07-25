import { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContextProvider'

const useLoginContext = () => {
	const loginContext = useContext(LoginContext)

	if (!loginContext) {
		throw new Error('Trying to use LoginContext outside of LoginContextProvider.')
	}

	return loginContext
}

export default useLoginContext
