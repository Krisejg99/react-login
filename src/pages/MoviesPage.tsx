import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useMemo } from 'react'
import defaultMovies from '../../data/defaultMovies'
import { Movie } from '../types'

const MoviesPage = () => {
	const data = useMemo(() => defaultMovies, [])

	const columns: ColumnDef<Movie>[] = [
		{
			header: 'ID',
			accessorKey: 'id',
		},
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

	return (
		<>
			<table>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th key={header.id}>
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
					<tr>
						<td>

						</td>
					</tr>
				</tbody>
			</table >
		</>
	)
}

export default MoviesPage
