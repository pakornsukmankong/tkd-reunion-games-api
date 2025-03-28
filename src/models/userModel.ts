import db from '../config/db';
import { User } from '../types/User';

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const [rows] = await db.query('SELECT * FROM Users');
    return rows as User[];
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};

export const updateUserPoints = async (id: number, pointsChange: number): Promise<boolean> => {
    try {
      const [result] = await db.query('UPDATE Users SET point = point + ? WHERE id = ?', [pointsChange, id]);
      
      // `result` is of type `ResultSetHeader[]`, so access the first element for `affectedRows`
      const affectedRows = (result as any).affectedRows;  // Casting to access affectedRows
  
      return affectedRows > 0;  // returns true if the row was updated
    } catch (error) {
      console.error('Error updating user points:', error);
      throw new Error('Failed to update user points');
    }
  };
