import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
import './App.css';

function App() {
  return (
    <ChatEngine
      height='100vh'
      projectID='a825b74c-d1e2-4d68-b3b2-c406beb0f84c'
      userName='Jamie'
      userSecret='123123'
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/> }
    />
  );
}

export default App;
