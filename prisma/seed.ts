import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const drone_1 = await prisma.drone.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'Luis Drone',
        model: 'Model 1',
        make: 'Make 1',
        serialNumber: 123,
        batteryLife: 100,
        topSpeed: 120
      },
    })
    const drone_2 = await prisma.drone.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Brian Drone',
            model: 'Model 2',
            make: 'Make 2',
            serialNumber: 456,
            batteryLife: 100,
            topSpeed: 120
        }
    });

    const drone_3 = await prisma.drone.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'Niel Drone',
            model: 'Model 3',
            make: 'Make 3',
            serialNumber: 789,
            batteryLife: 100,
            topSpeed: 120
        }
    });

    console.log({ drone_1, drone_2, drone_3 });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
