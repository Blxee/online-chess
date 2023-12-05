import { useEffect } from 'react';
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

  const searchMatch = () => {

  };

  return (
    <>
      <button>Join Random</button>
      <button>Search Match</button>
      <button>Play vs AI</button>
      {/* <GameBoard /> */}

    </>
  )
}
