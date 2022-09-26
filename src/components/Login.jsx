import React, { useContext } from "react";
import { Context } from "..";
import firebase from "firebase/compat/app";
import welcomeImg from "../img/backImg.svg"
import "../style/login.css"

const Login = () => {
const {auth} = useContext(Context);

const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
}

   return(
<div className="login">
        <div className="welcomeDiscription">
        <p className="welcomTextTitle">Добро пожаловать в GrosChat</p>
        <p className="welcomeTextSubtitle">В нашем чате ты можешь найти друзей, которые разделяют твои интересы.</p>
        <button className="buttonLogin" onClick={login} >Войти</button>
        </div>
        <img className="welcomeLoginImg" src={welcomeImg} />
</div>
    )
}

export default Login