import React, { useState, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getFirestore, getDoc, collection, addDoc, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore';
import { auth, db } from './firebase';
import './ChatBox.css';
import { useNavigate } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';

const ChatBox = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Firestore with correct imports
  const db = getFirestore(); // Initialize Firestore instance

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })

    return unsubscribe;
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, [])

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp()
    })
    setNewMessage("")
  }



  const navigate = useNavigate();
  const toHomePage = () => {
    navigate('/DDC/');
  }
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='Chat-page'>
      {user ? (
        <>
          <button type='button' className='backBtn' onClick={() => toHomePage()}><b>&#8592;</b> Back to Home</button>
          <div className="main-card">
            <div className="chat-header">Chat</div>
            <div className="chat-window">
              <ul className="message-list">
                {
                  messages.map(msg => (
                    <div key={msg.id} className={`message ${msg.data.uid === user.uid ? 'current' : 'other'}`}>
                      <img src={msg.data.photoURL} />
                      {msg.data.text}
                    </div>
                  ))
                }
              </ul>
            </div>
            <div className="chat-input">
              <input type="text" className="message-input" placeholder="Type your message here" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
              <button className="send-button" onClick={sendMessage}>Send</button>
              <button className="logout-btn" onClick={() => auth.signOut()}>LogOut</button>
            </div>
          </div>
        </>
      ) :
        <button className='loginBtn' onClick={handleGoogleLogin}>Login to proceed</button>
      }
    </div>
  )
}




export default ChatBox;