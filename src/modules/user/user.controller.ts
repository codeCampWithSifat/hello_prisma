import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDb = async (req:Request,res:Response) => {
    try {
        const result = await userService.insertIntoDb(req.body);
        res.send({
            success: true,
            message : "Create A User Successfully",
            data: result
        })
    } catch(error) {
        res.send(error)
    }
};

const insertOrUpdateProfile = async (req:Request, res:Response) => {
    try {
        const result = await userService.insertOrUpdateProfile(req.body);
        res.send({
            success: true,
            message : "User Profil Or Created  Successfully",
            data: result
        })
    } catch(error) {
        res.send(error)
    }
};


const getUsers = async (req:Request, res:Response) => {
    try {
        const result = await userService.getUsers();
        res.send({
            success: true,
            message : "Get All The  Users Successfully",
            data: result
        })
    } catch(error) {
        res.send(error)
    }
}

const getSingleUser = async (req:Request, res:Response) => {
    try {
        const id = parseInt(req.params.id);
        const result = await userService.getSingleUser(id);
        res.send({
            success: true,
            message : "Get A Single User ",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
    
}


export const UserController = {
    insertIntoDb,
    insertOrUpdateProfile,
    getUsers,
    getSingleUser
}