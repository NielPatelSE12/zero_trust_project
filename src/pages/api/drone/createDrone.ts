// pages/api/drone/createDrone.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, model, make, serialNumber, batteryLife, topSpeed } = req.body;

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
