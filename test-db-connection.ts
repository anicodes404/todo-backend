import { PrismaClient } from "./src/app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
