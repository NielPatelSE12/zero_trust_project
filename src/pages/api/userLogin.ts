import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const bcrypt = require('bcrypt');
const saltRounds = 10;

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
            name: username
          }}
        )

    if (user.length === 0){
      // this means that no user with entered username was found in db
      console.log('failed login')
      return res.status(404).json({ message: 'User not found' });
    }

    else{
      // else, compare the fetched users hashed password with the hash of the password they are 
      // trying to use to log in
      bcrypt.compare(password, user[0].password, function(err: Error, result: Boolean) {
        if (result === true){
          // if true, send successful login message
          console.log('found user')
          console.log(user)
          return res.status(200).json({ message: 'Login successful' });
        }

        else{
          // if hashes aren't the same, this means the user exists but password was wrong
          return res.status(404).json({message: 'Incorrect password'})
        }
        
    });

    }
  }
}