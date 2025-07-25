"use client"
import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { RouterContext, pageContext } from "../context/Router";

export const Form2 = () => {
    const context = useContext(userContext);
    const {setPage} = useContext(RouterContext);
    
    const { user, setUser } = context;

    const handleClick = () => {
        setPage(pageContext.summary);
    }
    return(
        <div>
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
        <div>
            <button onClick={handleClick}>
                Next
            </button>
        </div>
        </div>
    )
}