"use client"
import { useContext } from "react";
import { userContext } from "../context/UserContext";

export const Form = () => {
    const context = useContext(userContext);

    const {user, setUser} = context;

    return (
        <div className="justify-center align-center text-center">
            <label>
                First Name: 
                <input
                type="text"
                value={user.firstName}
                onChange={(e)=> setUser({...user, firstName:e.target.value})}
                placeholder="Please fill this out with your first name"
                className="mr-2 border rounded mb-5 w-1/2"
                required
                />
            </label>
            <br />
            <label>
                Last Name: 
                <input
                type="text"
                value={user.lastName}
                onChange={(e)=> setUser({...user, lastName:e.target.value})}
                placeholder="Please fill this out with your last name"
                className="mr-2 border rounded mb-5 w-1/2"
                required
                />
            </label>
            <br />
            <label>
                Email: 
                <input
                type="email"
                value={user.email}
                onChange={(e)=> setUser({...user, email:e.target.value})}
                placeholder="Please fill this out with your email address"
                className="mr-2 border rounded mb-5 w-1/2"
                required
                />
            </label>
        </div>
    )
}