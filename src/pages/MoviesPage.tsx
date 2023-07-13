import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useQuery } from 'react-query'
import { Movie } from '../types'
import { getMovies } from '../services/MovieAPI'

const MoviesPage = () => {
	const { data = [], isLoading, isError } = useQuery('movies', getMovies)

	const columns: ColumnDef<Movie>[] = [
		{
			header: 'Title',
			accessorKey: 'title',
		},
		{
			header: 'Realse Year',
			accessorKey: 'release_year',
		},
		{
			header: 'Watched',
			accessorKey: 'watched',
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
		<>
			<table>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th
									key={header.id}
									className='pe-4'
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
									className='pe-4'
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
}

export default MoviesPage
