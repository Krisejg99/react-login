/**
 * Router Template
 */
import express from 'express'
import { index } from '../controllers/movie_controller'
const router = express.Router()

/**
 * GET /movies
 */
router.get('/', index)

// /**
//  * GET /movies/:movieId
//  */
// router.get('/:movieId', show)

// /**
//  * POST /movies
//  */
// router.post('/', store)

// /**
//  * PATCH /movies/:movieId
//  */
// router.patch('/:movieId', update)

// /**
//  * DELETE /movies/:movieId
//  */
// router.delete('/:movieId', destroy)

export default router
