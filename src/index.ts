import { PrismaClient } from "@prisma/client";
import express, { Application } from "express"
import cors from "cors"

const app:Application = express();
const port = process.env.PORT || 5000

// use all the middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}));



const prisma = new PrismaClient();



async function main () {
    app.listen(port,() => {
        console.log(`Listening on the port ${port}`)
    })
}

main()