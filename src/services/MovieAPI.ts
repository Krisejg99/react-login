import axios from "axios"
import { Movie } from '../types'

const BASE_URL = 'http://localhost:3000'

/**
 * Get all movies
 */
export const getMovies = async () => {
	const res = await axios.get(`${BASE_URL}/movies`)
	return res.data.movies as Movie[]
}
