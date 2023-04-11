import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': 'a825b74c-d1e2-4d68-b3b2-c406beb0f84c',
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload()
    } catch (err) {
        setError('Incorrect username and password')
    }
  };

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input'
            placeholder='Username'
            required
          ></input>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            placeholder='Password'
            required
          ></input>
          <div align='center'>
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
            <h2 className='error'>{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
}
