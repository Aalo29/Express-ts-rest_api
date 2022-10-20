import { User } from "./user.interface";
import { Users } from "./users.interface";


// Create and save a new user
let users: Users = {
    1: {
        id: 1,
        name: "Leanne Graham",
        age: 30
    },
    2: {
        id: 2,
        name: "Ervin Howell",
        age: 25
    },
    3: {
        id: 3,
        name: "Clementine Bauch",
        age: 20
    },
    4: {
        id: 4,
        name: "Patricia Lebsack",
        age: 25
    },
};

// service methods
export const findAll = async (): Promise<User[]> => Object.values(users);
export const find = async (id: number): Promise<User> => users[id];
export const create = async (newUser: User): Promise<User> => {
    const id = new Date().valueOf();
    users[id] = {
        ...newUser,
        id,
    };
    return users[id];
};

export const update = async (
    id: number,
    userUpdate: User
): Promise<User | null> => {
    const user = await find(id);
    if (!user) {
        return null;
    }
    users[id] = { ...user, ...userUpdate };
    return users[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const user = await find(id);
    if (!user) {
        return null;
    }
    delete users[id];
};
