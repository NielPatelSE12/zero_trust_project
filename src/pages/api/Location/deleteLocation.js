import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { locationId } = req.body;  // Ensure this name matches exactly what you send from the client
    try {
      const location = await prisma.location.delete({
        where: { id: parseInt(locationId, 10) },  // Good to specify radix in parseInt
      });
      res.status(200).json(location);
    } catch (error) {
      console.error(error);  // Logging the actual error can help in debugging
      res.status(400).json({ error: `Location could not be deleted: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
