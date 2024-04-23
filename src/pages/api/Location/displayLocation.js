import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetching all entries from the 'location' table
      const locations = await prisma.Location.findMany();
      res.status(200).json(locations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to fetch locations: ${error.message}` });
    }
  } else {
    // If any method other than GET is used on this endpoint
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
