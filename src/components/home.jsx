import React, { useContext } from "react";
import { Context } from "..";
import {useAuthState} from "react-firebase-hooks/auth"
import Chat from "./Chat";
import Login from "./Login";
import "../style/home.css"


function Home() {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth)
    return (
        <div className="home">
            {user ? <Chat /> : <Login />}
        </div>
    )
}

export default Home