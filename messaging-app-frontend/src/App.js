import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import React, {useEffect, useState} from 'react'
import Pusher from 'pusher-js'

function App() {
const[messages, setMessages] = useState([])

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
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div> 
    </div>
  );
}

export default App;
