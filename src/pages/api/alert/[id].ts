import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const alert_id = req.query.id

  switch (req.method) {
    case 'DELETE': // Deleting data from the database
      return handleDELETE(alert_id, res)
      
    default: // If can't GET or DELETE 
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      )
  }
}

// DELETE /api/alert/:id
async function handleDELETE(alert_id: unknown, res: NextApiResponse<any>) {
  const post = await prisma.alert.delete({ // delete an alert from the db
    where: { id: Number(alert_id) }, // using an alert id
  })
  return res.json(post)
}
