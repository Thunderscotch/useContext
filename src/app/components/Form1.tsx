"use client"
import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { RouterContext, pageContext } from "../context/Router";
export const Form1 = () => {
    const context = useContext(userContext);
    const route = useContext(RouterContext);

    const {user, setUser} = context;
    const {page, setPage } = route;
    const handleClick = () => {
        setPage(pageContext.page2)
        console.log(page);
    }

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
            <div>
           <button onClick={handleClick}>
             Next
           </button>
           </div>
        </div>
    )
}