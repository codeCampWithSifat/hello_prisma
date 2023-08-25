import { PrismaClient } from "@prisma/client";
import app from "./app";


const port = process.env.PORT || 5000
const prisma = new PrismaClient();
async function main () {
    app.listen(port,() => {
        console.log(`Listening on the port ${port}`)
    })
}

main()