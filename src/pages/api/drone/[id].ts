import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const droneId = req.query.id

  switch (req.method) {
    case 'DELETE':
      return handleDELETE(droneId, res)

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      )
  }
}

// DELETE /api/drone/:id
async function handleDELETE(droneId: unknown, res: NextApiResponse<any>) {
  const post = await prisma.drone.delete({
    where: { id: Number(droneId) },
  })
  return res.json(post)
}