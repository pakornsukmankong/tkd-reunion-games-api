/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Fetch all users from the database.
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique identifier of the user
 *                   name:
 *                     type: string
 *                     description: The name of the user
 *                   point:
 *                     type: integer
 *                     description: The points of the user
 *                 required:
 *                   - id
 *                   - name
 *                   - point
 */

/**
 * @swagger
 * /users/{id}/points/increment:
 *   put:
 *     summary: Increment user points
 *     description: Increment points of a user by 1.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Points incremented successfully
 *       400:
 *         description: Invalid user ID
 *       404:
 *         description: User not found or points not updated
 *       500:
 *         description: Error updating points
 */

/**
 * @swagger
 * /users/{id}/points/decrement:
 *   put:
 *     summary: Decrement user points
 *     description: Decrement points of a user by 1.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Points decremented successfully
 *       400:
 *         description: Invalid user ID
 *       404:
 *         description: User not found or points not updated
 *       500:
 *         description: Error updating points
 */
