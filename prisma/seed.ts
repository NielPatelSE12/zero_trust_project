import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    const newUser = await prisma.user.create({
        data: {
            name: 'Mark',
            password: 'eldiablo'
        }
    });

    const newDrone = await prisma.drone.create({
        data: {
            name: 'Drone1',
            model: 'Model1',
            make: 'Make1',
            serialNumber: 123456,
            batteryLife: 60,
            topSpeed: 40,
            owner: {
                connect: { id: newUser.id }  // connects the Drone to the User using the owner relation
            }
        }
    });

    
    const newDrone2 = await prisma.drone.create({
        data: {
            name: 'Drone2',
            model: 'Model1',
            make: 'Make1',
            serialNumber: 789,
            batteryLife: 160,
            topSpeed: 420,
            owner: {
                connect: { id: newUser.id }  // connects the Drone to the User using the owner relation
            }
        }
    });



//     const drone_1 = await prisma.drone.upsert({
//       where: { id: 1 },
//       update: {},
//       create: {
//         name: 'Luis Drone',
//         model: 'Model 1',
//         make: 'Make 1',
//         serialNumber: 123,
//         batteryLife: 100,
//         topSpeed: 120
//       },
//     })
//     const drone_2 = await prisma.drone.upsert({
//         where: { id: 2 },
//         update: {},
//         create: {
//             name: 'Brian Drone',
//             model: 'Model 2',
//             make: 'Make 2',
//             serialNumber: 456,
//             batteryLife: 100,
//             topSpeed: 120
//         }
//     });

//     const drone_3 = await prisma.drone.upsert({
//         where: { id: 3 },
//         update: {},
//         create: {
//             name: 'Niel Drone',
//             model: 'Model 3',
//             make: 'Make 3',
//             serialNumber: 789,
//             batteryLife: 100,
//             topSpeed: 120
//         }
//     });

//     console.log({ drone_1, drone_2, drone_3 });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
