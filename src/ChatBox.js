import React, { useState , useEffect} from 'react';
import { GoogleAuthProvider , onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import {doc, setDoc , getFirestore, getDoc , onSnapShot, collection, addDoc, orderBy,query,serverTimestamp} from 'firebase/firestore';
import { auth } from './firebase';
import './ChatBox.css';
import { useNavigate } from 'react-router-dom';

const ChatBox = () => {
    const navigate = useNavigate();
    const toHomePage = () =>{
        navigate('/DDC/');
    }
    return(
        <div className='Chat-page'>
            <button type='button' className='backBtn' onClick={() => toHomePage()}><b>&#8592;</b> Back to Home</button>
            <div className="main-card">
                <div className="chat-header">Chat</div>
                <div className="chat-window">
                    <ul className="message-list"></ul>
                </div>
                <div className="chat-input">
                    <input type="text" className="message-input" placeholder="Type your message here"/>
                        <button className="send-button">Send</button>
                </div>
            </div>  
        </div>
    )
}

export default ChatBox;