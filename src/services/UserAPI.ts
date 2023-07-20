import axios from "axios"
import { User } from '../types'

const BASE_URL = 'http://localhost:3000'

/**
 * Get single user
 */
export const getUser = async (username: string) => {
	const res = await axios.get(`${BASE_URL}/users/${username}`)
	return res.data as User
}
