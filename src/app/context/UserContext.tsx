"use client"

import React, { createContext, useState, ReactNode } from "react";

type User ={
    firstName : string,
    lastName : string,
    email : string,
    // setFirstName: (firstName : string) => void;
    // setLastName: (lastName : string) => void;
    // setEmail: (email: string) => void;
}

type userContextType= {
    user : User,
    setUser : (user : User) => void;
}

export const userContext = createContext<userContextType>({
    user : {
        firstName : "",
        lastName : "",
        email: ""
    },
    setUser : () => {}
});

export const Provider = ({children} : {children : ReactNode}) => {
    const [user, setUser] = useState<User>({
        firstName : "",
        lastName : "",
        email: ""
    })
    
    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}