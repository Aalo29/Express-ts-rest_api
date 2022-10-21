import express, { Request, Response } from 'express';
import * as UserService from './userservice';
import { User } from './user.interface';

// Create a new router to handle user requests
export const userRouter = express.Router();

// GET /users
userRouter.get('/', async (req: Request, res: Response) => {
  
    const users: User[] = await UserService.findAll();
    if(users.length === null){
        return res.status(404).send("No users found")
    }
    else 
    {
        return res.status(200).send(users);
    }

});

// GET /users/:id
userRouter.get('/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const user: User = await UserService.find(id);
    if(user) {
        return res.status(200).send(user);
    }
    return res.status(404).send("User not found");
});

// POST /users
userRouter.post('/', async (req: Request, res: Response) => {
    const user: User = req.body;
    const newUser: User = await UserService.create(user);
    return res.status(201).json(newUser);
});

// PUT /users/:id
userRouter.put('/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const userUpdate: User = req.body;
    const existingUser: User = await UserService.find(id);
    if (existingUser) {
        const updatedUser = await UserService.update(id, userUpdate);
        return res.status(200).json(updatedUser);
    }
    else {
        return res.status(404).json("The user does not exist");
    }
});

// DELETE /users/:id
userRouter.delete('/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const existingUser: User = await UserService.find(id);
    if(existingUser) {
        await UserService.remove(id);
        return res.status(200).json("The user has been deleted");
    }
    else {
        return res.status(404).json("The user with the given ID was not found.");
    }
});
export default userRouter;
       