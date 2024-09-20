import { useEffect } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom() {
  useEffect(() => {
    //setup function
    const connection = createConnection();
    connection.connect();
   //clean up function
    return()=>connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
