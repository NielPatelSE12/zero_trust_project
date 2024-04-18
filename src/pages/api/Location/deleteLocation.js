import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { locationId } = req.body;  
    try {
      const location = await prisma.location.delete({
        where: { id: parseInt(locationId, 10) }, 
      });
      res.status(200).json(location);
    } catch (error) {
      console.error(error);  
      res.status(400).json({ error: `Location could not be deleted: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
