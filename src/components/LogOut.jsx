import React, { useContext } from "react";
import { Context } from "..";
// import {useAuthState} from "react-firebase-hooks/auth"
import signOut from "../img/imgIcon/signout.svg"


function LogOut() {


    const {auth} = useContext(Context)
    // const [user] = useAuthState(auth)
    
    const exit = () => {auth.signOut()}

    return (
        <div className="logOut">
            <button onClick={exit}>
                <img className="navigationIcon" src={signOut} alt="logOut"/>
                exit
            </button>
        </div>
    )
}

export default LogOut


