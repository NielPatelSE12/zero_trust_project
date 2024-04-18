import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { locationName, locationCords, locationAlg } = req.body; // Ensuring field names are correct
    try {
      const location = await prisma.location.create({
        data: {
          locationName,
          locationCords, // This should directly map to your database field
          locationAlg, // This should directly map to your database field
        },
      });
      res.status(200).json(location);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: `Location could not be added: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
