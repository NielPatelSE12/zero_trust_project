import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;

// GET /api/getAllDrones
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const auth = req.headers.authorization;
    const token = auth.split(' ')[1];
    try {
      console.log('the token is ' + token.length);
      const decoded = jwt.verify(token, JWT_KEY);
    

      console.log(decoded)
      console.log(decoded.userID)

      const result = await prisma.drone.findMany({
      where: {
        ownerID: decoded.userID
      }
      })

      console.log('res belowwwww');
      console.log(result);
    
    return res.status(201).json(result)
  } catch (error) {
    console.log('error found')
  }
}