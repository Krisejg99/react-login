/**
 * Controller Template
 */
import { Request, Response } from 'express'
import prisma from '../prisma'

/**
 * Get all users
 */
export const index = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany()

	res.send(users)
}

/**
 * Get a single user
 */
export const show = async (req: Request, res: Response) => {
	const user = await prisma.user.findUnique({
		where: {
			name: req.params.username,
		}
	})

	res.send(user)
}

/**
 * Create a user
 */
export const store = async (req: Request, res: Response) => {
	const user = await prisma.user.create({
		data: {
			name: req.body.name,
			password: req.body.password,
		},
	})

	res.send(user)
}

// /**
//  * Update a user
//  */
// export const update = async (req: Request, res: Response) => {
// }

// /**
//  * Delete a user
//  */
// export const destroy = async (req: Request, res: Response) => {
// }
