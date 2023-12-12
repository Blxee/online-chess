import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './GameBoard'


export default function App() {

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws/server-socket/');

    socket.onmessage = event => {
      const data = JSON.parse(event.data);
      console.log(data);
    }
  }, []);

  const joinRandom = () => {
    setTimeout(() => setContent(<GameBoard />), 250);
  };

  const joinMatch = () => {
    setTimeout(() => setContent(<GameBoard />), 250);
  };

  const [content, setContent] = useState(
    <>
      <button onClick={joinRandom}>Join Random</button>
      <button onClick={joinMatch}>Join Match</button>
      {/* <div id='search-bar'> */}
      {/*   <input type='search' placeholder='please enter match id!'/> */}
      {/* </div> */}
    </>
  );

  return (
    <>
      {content}
    </>
  )
}
