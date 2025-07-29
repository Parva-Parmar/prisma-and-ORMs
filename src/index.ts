import { PrismaClient } from "../node_modules/@prisma/client";

const client = new PrismaClient();

async function getUser(){
    const user = await client.user.findFirst({
        where: {
           id:1
        },
        include:{
            todos: true
        }
    })

    console.log(user);
}

getUser();
