// import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [user,setUser] = useState(null);
    const [ready , setReady] = useState(null);

<<<<<<< HEAD
    useEffect(() => {
        if(!user){
            // axios.get('/profile').then(({data}) =>{
            //     setUser(data);
            //     setReady(true);
            // });
        }
    } , []);
=======
    // useEffect(() => {
    //     if(!user){
    //         // axios.get('/profile').then(({data}) =>{
    //         //     setUser(data);
    //         //     setReady(true);
    //         // });
    //     }
    // } , []);
>>>>>>> 054dc1e7baecce312d47308bff0d66110612c67d

    return(
        <UserContext.Provider value={{user,setUser,ready}}>
            {children}
        </UserContext.Provider>
    )
}