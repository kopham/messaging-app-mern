import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import React, {useEffect, useState} from 'react'
import Pusher from 'pusher-js'
import axios from './components/axios'
import Login from'./components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
const[messages, setMessages] = useState([])
const [{ user }, dispatch] = useStateValue()


useEffect(() => {
  axios.get("/messages/sync").then(res => {
    setMessages(res.data)
  })
}, [])

useEffect(() => {
  const pusher = new Pusher('67e04ac25de523ac99c0', {
    cluster: 'us3'
  });

  const channel = pusher.subscribe('message');
  channel.bind('inserted', (data) => {
    setMessages([...messages, data])
  });

  return () => {
    channel.unbind_all()
    channel.unsubscribe()
  }
}, [messages])

console.log(messages)

  return (
    <div className="App">
      {!user ? <Login /> : (
      <div className="app__body">
        <Sidebar messages = {messages} />
        <Chat messages = {messages} />
      </div>
    )} 
    </div>
  );
}

export default App;
