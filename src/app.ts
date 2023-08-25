import express, { Application } from "express"
import cors from "cors"
import { userRoutes } from "./modules/user/user.route";

const app:Application = express();

// use all the middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}));


// ues all the router
app.use("/api/v1/user", userRoutes)


export default app