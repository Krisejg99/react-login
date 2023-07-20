import express from "express"
import movies from './movie_router'
import users from './user_router'

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP BOOP",
	})
})

/**
 * /movies
 */
router.use('/movies', movies)

/**
 * /users
 */
router.use('/users', users)

export default router
