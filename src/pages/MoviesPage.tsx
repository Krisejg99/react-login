import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useQuery } from 'react-query'
import { Movie } from '../types'
import { getMovies } from '../services/MovieAPI'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useLoginContext from '../hooks/useLoginContext'

const MoviesPage = () => {
	const { data = [], isLoading, isError } = useQuery('movies', getMovies)
	const { login } = useLoginContext()

	const columns: ColumnDef<Movie>[] = [
		{
			header: 'Title',
			accessorKey: 'title',
		},
		{
			header: 'Realse Year',
			accessorKey: 'release_year',
		},
	]

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel()
	})

	if (isLoading) return <span>Loading...</span>
	if (isError) return <span>Error encountered</span>

	return (
		<div className='d-flex flex-column align-items-center'>
			{login
				? (
					<>
						<h1>Watch list</h1>

						<table>
							<thead>
								{table.getHeaderGroups().map(headerGroup => (
									<tr key={headerGroup.id}>
										{headerGroup.headers.map(header => (
											<th
												key={header.id}
												className='pe-4 pb-2'
											>
												{flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
											</th>
										))}
									</tr>
								))}
							</thead>

							<tbody>
								{table.getRowModel().rows.map(row => (
									<tr key={row.id}>
										{row.getVisibleCells().map(cell => (
											<td
												key={cell.id}
												className='pe-4 border-bottom'
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table >
					</>
				)

				: (
					<>
						<h1 className='h2'>Log in to see your movie list</h1>

						<Link to={'/login'}>
							<Button variant='success'>Login</Button>
						</Link>

					</>
				)
			}
		</div>
	)
}

export default MoviesPage
