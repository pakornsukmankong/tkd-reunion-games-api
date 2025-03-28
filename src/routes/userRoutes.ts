import express from 'express'
import { decrementPointsController, getAllUsersController, incrementPointsController } from '../controllers/userController'

const router = express.Router()

router.get('/', getAllUsersController)

router.put('/:id/points/increment', incrementPointsController)

router.put('/:id/points/decrement', decrementPointsController)

export default router
