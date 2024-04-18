// pages/api/drone/createDrone.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const jwt = require('jsonwebtoken');
const JWT_KEY='bd0ddb1aeed560dceec87544deab0aa2fc7251293692c6082ebecb9729420314'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('BODYY')
    console.log(req.body)
    try {
      const { name, model, make, serialNumber, batteryLife, topSpeed } = req.body.formData;
      const token = req.body.token;
      const decoded = jwt.verify(token, JWT_KEY);


      const serialNumberInt = parseInt(serialNumber);
      const batteryLifeInt = parseInt(batteryLife);
      const topSpeedInt = parseInt(topSpeed);

      const newDrone = await prisma.drone.create({
        data: {
          name,
          model,
          make,
          serialNumber: serialNumberInt,
          batteryLife: batteryLifeInt,
          topSpeed: topSpeedInt,
          ownerID: decoded.userID,
        },
      });

      res.status(201).json(newDrone);
    } catch (error) {
      console.error('Error creating drone:', error);
      res.status(500).json({ error: 'Failed to create drone' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
