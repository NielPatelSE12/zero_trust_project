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

      const checkUserExists = await prisma.user.findMany(
        {
          where: {
            name: username
          }
        }
      )
      console.log(checkUserExists)
      if (checkUserExists.length != 0){
        // means user w/ this username already exists, so send error
        return res.status(404).json({message: "User with this username already exists"})
      }

      else{
        // this means that username is not taken yet, so now we take steps to 
        // generate that user
        bcrypt.hash(password, saltRounds, async function(err: Error, hash: string) {
          // generate hash and store hash in db.
          const user = await prisma.user.create(
            {
                data: {
                    name: username,
                    password: hash
                }
            }
          )
          console.log(user)
          // return code 201 for successful signup
          return res.status(201).json(user)
      });



  }
}
}