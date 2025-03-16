import { Request, Response } from 'express'
import { getAllUsers, updateUserPoints } from '../models/userModel'

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: (err as Error).message })
  }
}

export const incrementPointsController = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = Number(req.params.id) // Get the user ID from the route params

    if (isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' })
    }

    const updated = await updateUserPoints(userId, 1) // Increment by 1

    if (updated) {
      res.json({ message: `User ${userId} points incremented by 1` })
    } else {
      res.status(404).json({ message: 'User not found or points not updated' })
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
}


export const decrementPointsController = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = Number(req.params.id) // Get the user ID from the route params

    if (isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' })
    }

    const updated = await updateUserPoints(userId, -1) // Decrement by 1

    if (updated) {
      res.json({ message: `User ${userId} points decremented by 1` })
    } else {
      res.status(404).json({ message: 'User not found or points not updated' })
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
}
