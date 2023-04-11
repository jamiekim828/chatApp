import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  
  return (
    <ChatEngine
      height='100vh'
      projectID='a825b74c-d1e2-4d68-b3b2-c406beb0f84c'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/> }
    />
  );
}

export default App;
