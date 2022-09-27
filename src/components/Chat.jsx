import React,{useContext, useState} from "react";
import { Context } from "..";
import {useAuthState} from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"
import firebase from "firebase/compat/app";
import send from "../img/imgIcon/message.svg"
import "../style/chat.css"
import Loader from "./Loader";

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value,setValue] = useState("")
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if(loading) {
        return (<Loader />)
    }

   return (
   <div className="chatRoom">
    <div 
    className="chatMessageRoom">
        {messages.map(message => 
            <div 
            className="chatMessage"
            style={{
                margin: 10,
                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                flexDirection: user.uid === message.uid ? 'row-reverse' : 'row',
                padding: '5px',
                width: 'fit-content'
            }}
            >
                <div className="userInfo">
                    <img className="userPhoto" src={message.photoURL} alt="userPhoto" />
                    <div className="chatName">
                        {message.displayName}
                    </div>
                </div>
                
                <div 
                className="chatText"
                style={{
                    color: user.uid === message.uid ? '#707C97' : '#fff',
                    background: user.uid === message.uid ? '#fff' : 'linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%)',
                    boxShadow: user.uid === message.uid ? '10px 10px 25px rgba(112, 124, 151, 0.05), 15px 15px 35px rgba(112, 124, 151, 0.05)' : '10px 10px 25px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 50px rgba(42, 139, 242, 0.1)',
                    padding:'10px',
                    width: '70%',
                    overflowWrap: 'anywhere',
                    margin:'10px 7px',
                    border:'1px solid rgba(112, 124, 151, 0.25)',
                    borderRadius: user.uid === message.uid ? '10px 10px 0px 10px' : '10px 10px 10px 0px'
                }}
                >
                    {message.text}
                </div>

            </div>
            )}
</div>
<div className="inputArea" >
    <input className="inputText" 
    value={value} 
    onChange={e => setValue(e.target.value)}
    placeholder="Введите сообщение"
    ></input>
    <button className="sendText" onClick={sendMessage}>
        <img className="sendIcon" src={send} alt="sendIcon" />
    </button>
</div>

    </div>)
    
}

export default Chat