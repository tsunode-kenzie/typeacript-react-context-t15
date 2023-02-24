import { createContext, useState, ReactNode } from "react";
import { IUserRegister } from "../components/RegisterUser";

export interface IUser {
    id?: string;
    name: string;
    email: string;
}

interface IUserContext {
    users: IUser[];
    registerUser: (data: IUserRegister) => void;
}

interface IUserProviderProps {
    children: ReactNode
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [users, setUsers] = useState<IUser[]>([]);


    const registerUser = (data: IUserRegister) => {
        const newUser = {
            id: crypto.randomUUID(),
            ...data,
        }
        setUsers([...users, newUser])
    }

    return(
        <UserContext.Provider value={{ users, registerUser }}>
            {children}
        </UserContext.Provider>
    )
}