import { useReactTable, ColumnDef, getCoreRowModel } from '@tanstack/react-table'
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

		</>
	)
}

export default MoviesPage
