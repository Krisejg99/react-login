/**
 * Controller Template
 */
import { Request, Response } from 'express'
import prisma from '../prisma'

/**
 * Get all resources
 */
export const index = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany()
	res.send({
		status: 'success',
		data: users,
	})
}

// /**
//  * Get a single resource
//  */
// export const show = async (req: Request, res: Response) => {
// }

/**
 * Create a resource
 */
export const store = async (req: Request, res: Response) => {
	const user = await prisma.user.create({
		data: {
			name: req.body.name,
			password: req.body.password,
		},
	})

	console.log(user)

	res.send({
		status: 'success',
		data: user,
	})
}

// /**
//  * Update a resource
//  */
// export const update = async (req: Request, res: Response) => {
// }

// /**
//  * Delete a resource
//  */
// export const destroy = async (req: Request, res: Response) => {
// }
