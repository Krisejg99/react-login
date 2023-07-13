import { getMovies } from '../services/MovieAPI'
import { useQuery } from 'react-query'
import { ListGroup } from 'react-bootstrap'

const MovieList = () => {
	const { isLoading, isError, data } = useQuery('movies', getMovies)

	if (isLoading) return <span>Loading...</span>
	if (isError) return <span>Error encountered</span>

	return (
		<>
			{data && (
				<ListGroup>
					{data.map(item => (
						<ListGroup.Item key={item.id}>

							<h2>{item.title}</h2>
							<p>Status: {item.watched ? 'Watched' : 'Need to watch'}</p>
							<p>Released: {item.release_year}</p>

						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</>

	)
}

export default MovieList
