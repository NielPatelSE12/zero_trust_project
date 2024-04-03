import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const drones = await prisma.drone.findMany();
      res.status(200).json(drones);
    } catch (error) {
      console.error("Error fetching drone data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
