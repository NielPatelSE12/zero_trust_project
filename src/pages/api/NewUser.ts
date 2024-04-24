import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as yup from 'yup'; // For data verification


const prisma = new PrismaClient()

// bcrypt for password hashing
const bcrypt = require('bcrypt');
const saltRounds = 10;

// jsonwebtoken for creating JWTs
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY;

// Yup schema for validating user input
const userSchema = yup.object().shape({
  username: yup.string().required().min(3, 'Username must be at least 3 characters long'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one non-alphanumeric character')
});

// The main API route function
export default async function userSignup(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method === 'POST'){
      try {
          // Validate request body against the schema
          const validatedBody = await userSchema.validate(req.body, { abortEarly: false });
          const { username, password } = validatedBody;

          const checkUserExists = await prisma.user.findMany({
              where: {
                  name: username
              }
          });

          if (checkUserExists.length !== 0){
              return res.status(409).json({message: "User with this username already exists"});
          } else {
              bcrypt.hash(password, saltRounds, async function(err: Error | undefined, hash: string) {
                  if (err) {
                      return res.status(500).json({ message: "Error hashing password" });
                  }

                  const user = await prisma.user.create({
                      data: {
                          name: username,
                          password: hash
                      }
                  });

                  const token = jwt.sign({username: user.name, userID: user.id}, JWT_KEY, {expiresIn: '1h'});
                  return res.status(201).json({ message: 'User successfully created', token: token });
              });
          }
      } catch (error: any) {
          return res.status(400).json({ errors: error.errors });
      }
  } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


/*export default async function userSignup(
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
          const token = jwt.sign({username: user.name, userID: user.id}, JWT_KEY, {expiresIn: '1h'});
          console.log(token)
          return res.status(200).json({ message: 'Login successful', token: token });
          // return code 201 for successful signup
          return res.status(201).json(user)
      });



  }
}
}*/




/* import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY;

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
          const token = jwt.sign({username: user.name, userID: user.id}, JWT_KEY, {expiresIn: '1h'});
          console.log(token)
          return res.status(200).json({ message: 'Login successful', token: token });
          // return code 201 for successful signup
          return res.status(201).json(user)
      });



  }
}
}*/