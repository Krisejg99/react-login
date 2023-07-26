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

/**
 * Create a new user
 */
export const createUser = async (name: string, password: string) => {
	const res = await axios.post(`${BASE_URL}/users`, {
		name,
		password,
	})

	return res.data as User
}
