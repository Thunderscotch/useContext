"use client"
import { useContext } from "react";
import { userContext } from "../context/UserContext";

export const ShowFrom = () => {
    const context = useContext(userContext);
    const { user } = context;

    return(
        <div className="justify-center text-center flex flex-col">
            <h1>Details of the context form</h1>
            <p>First Name: {user.firstName}</p>
            <p>Last Name : {user.lastName}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}