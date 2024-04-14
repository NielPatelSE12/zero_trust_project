// pages/api/alert/createAlert.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("This is the body");
  console.log(req.body.nameOfAlert);
  if (req.method === 'POST') { // Sending data to the database
    try {
      const { nameOfAlert, reason, errorMessage , status } = req.body;
      console.log("Alert Information recieved!!",req.body);

      const newAlert = await prisma.alert.create({
        data: {
          nameOfAlert: nameOfAlert,
          reason: reason,
          errorMessage: errorMessage,
          status: status,
        },
      });

      res.status(201).json(newAlert);
    } catch (error) { // If we can't add an alert display error msg
      console.error('Error adding alert:', error);
      res.status(500).json({ error: 'Failed to add alert' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
