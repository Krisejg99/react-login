import { useEffect, useState } from 'react'
import { Movie } from '../types'
import { getMovies } from '../services/MovieAPI'

const MovieList = () => {
	const [movies, setMovies] = useState<Movie[]>([])

	const getMovieList = async () => {
		const data = await getMovies()
		setMovies(data)
	}

	useEffect(() => {
		getMovieList()
	}, [])

	return (
		<ul>
			{movies.map(movie => (
				<li key={movie.id}>{movie.title}</li>
			))}
		</ul>
	)
}

export default MovieList
