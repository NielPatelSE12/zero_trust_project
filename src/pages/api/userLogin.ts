import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY;
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
          // here we generate a user authentication token when user successfully logs in and we send it back to client
          const token = jwt.sign({username: user[0].name, userID: user[0].id}, JWT_KEY, {expiresIn: '1h'});
          console.log(token)
          return res.status(200).json({ message: 'Login successful', token: token });
        }

        else{
          // if hashes aren't the same, this means the user exists but password was wrong
          return res.status(404).json({message: 'Incorrect password'})
        }
        
    });

    }
  }
}