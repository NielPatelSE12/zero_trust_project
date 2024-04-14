import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// GET /api/getAllAlerts
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result = await prisma.alert.findMany()
  return res.status(201).json(result)
}