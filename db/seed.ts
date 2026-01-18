import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
    const prisma = new PrismaClient();

    try {
        await prisma.product.deleteMany();
        await prisma.product.createMany({ data: sampleData.products });
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch((error) => {
        console.error('Seeding failed:', error);
        process.exit(1);
    });