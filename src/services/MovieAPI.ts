import axios from "axios"
import { Movie } from '../types'

const BASE_URL = import.meta.env.VITE_BASE_URL

/**
 * Get all movies
 */
export const getMovies = async () => {
	const res = await axios.get(`${BASE_URL}/movies`)
	return res.data as Movie[]
}
