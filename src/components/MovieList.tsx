import React, { useState } from 'react'
import { Movie } from '../types'
import { getMovies } from '../services/MovieAPI'

interface IProps {

}

const MovieList: React.FC<IProps> = ({ }) => {
	const [movies, setMovies] = useState<Movie[]>([])

	const getMovieList = async () => {
		const data = await getMovies()
		setMovies(data)
	}

	getMovieList()

	return (
		<ul>
			{movies.map(movie => (
				<li key={movie.id}>{movie.title}</li>
			))}
		</ul>
	)
}

export default MovieList
