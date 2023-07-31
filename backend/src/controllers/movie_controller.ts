/**
 * Controller Template
 */
import { Request, Response } from 'express'
import prisma from '../prisma'

/**
 * Get all movies
 */
export const index = async (req: Request, res: Response) => {
	const movies = await prisma.movie.findMany()
	res.send(movies)
}

// /**
//  * Get a single movie
//  */
// export const show = async (req: Request, res: Response) => {
// }

// /**
//  * Create a movie
//  */
// export const store = async (req: Request, res: Response) => {
// }

// /**
//  * Update a movie
//  */
// export const update = async (req: Request, res: Response) => {
// }

// /**
//  * Delete a movie
//  */
// export const destroy = async (req: Request, res: Response) => {
// }
