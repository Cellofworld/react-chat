import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "..";
import {useAuthState} from "react-firebase-hooks/auth"
import "../style/layout.css"
import LogOut from "./LogOut";
import Home from "./home";
import homeIcon from "../img/imgIcon/bars.svg"
import chatIcon from "../img/imgIcon/chat.svg"
import userIcon from "../img/imgIcon/user.svg"

function Layout() {

const {auth} = useContext(Context)
const [user] = useAuthState(auth)




    return (


        <>
        <div className="mainSection">
        <div className={user ? 'navigationBar' : 'navigationBar_disable'}>

            <div className="userNavigationInfo">
                    <img className="userNavPhoto" src={user ? user.photoURL : ''} alt="userNavPhoto" />
                    <div className="userNameNavigation">
                        {user ? user.displayName : ''}
                    </div>               
            </div>
            <div className="navigationButtonBar">

                    <Link className="navigationButton Home" to="/">
                        <img className="navigationIcon" src={homeIcon} alt="homeIcon" />
                        Home
                    </Link>

                    <Link className="navigationButton Profile" to="/">
                        <img className="navigationIcon" src={userIcon} alt="userIcon" />
                        Profile
                    </Link>

                    <Link className="navigationButton Chat" to="/">
                        <img className="navigationIcon" src={chatIcon} alt="chatIcon" />
                        Chat
                    </Link>                
            </div>
            {<LogOut />}
        </div>
        <Home />
        <Outlet />
        </div>
        </>
    )
}

export default Layout