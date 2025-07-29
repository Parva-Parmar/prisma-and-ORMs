import { PrismaClient } from "../node_modules/@prisma/client";

const client = new PrismaClient();

async function createUser(){
    await client.user.create({
        data: {
            username: "parva",
            password: "parva123",
            age: 21,
            city: "Valsad"
        }
    })
}

createUser();