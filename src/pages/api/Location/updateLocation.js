import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { locationId, newlocationName } = req.body;
    try {
      const location = await prisma.location.update({
        where: { id: parseInt(locationId, 10) }, 
        data: { locationName: newlocationName },  
      });
      res.status(200).json(location);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: `Location could not be updated: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
