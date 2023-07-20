/**
 * Router Template
 */
import express from 'express'
import { index, show, store } from '../controllers/user_controller'
const router = express.Router()

/**
 * GET /users
 */
router.get('/', index)

/**
 * GET /users/:username
 */
router.get('/:username', show)

/**
 * POST /users
 */
router.post('/', store)

// /**
//  * PATCH /users/:userId
//  */
// router.patch('/:userId', update)

// /**
//  * DELETE /users/:userId
//  */
// router.delete('/:userId', destroy)

export default router
