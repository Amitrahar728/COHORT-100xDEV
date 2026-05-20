// 
import { PrismaClient } from "./generated/prisma/client.js";
// import { PrismaConfig } from "./generated/prisma/client.js"
const client = new PrismaClient({});
async function createUser() {
    await client.user.create({
        data: {
            username: "Amit",
            password: "123123",
            age: 21,
            city: "fatehabad"
        }
    });
}
//# sourceMappingURL=index.js.map