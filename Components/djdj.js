
import {createContext} from "react"


const UserInfo=createContext()


export const User=({children})=>{

    const username="harry"


    return(
        <UserInfo.Provider value={username}>
            {children}
        </UserInfo.Provider>
    )



}


import {useContext} from "react"

export const Home=()=>{
    const userdata=useContext(UserInfo)
    console.log(userdata.username)
    return(
        <p>{userdata.username}</p>

    )

}