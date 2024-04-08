import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function userSignup(
  req: NextApiRequest,
  res: NextApiResponse
  ) {

    if (req.method === 'POST'){

      const body = req.body;
      const username = body.username;
      const password = body.password;

      const user = await prisma.user.findMany({
          where: {
            name: username,
            password: password
          }}
        )
    if (user.length === 0){
      console.log('failed login')
      return res.status(404).json({ message: 'User not found' });
    }
    else{
      console.log('found user')
      console.log(user)
      return res.status(200).json({ message: 'Login successful' });
    }
  }
}