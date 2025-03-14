// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef, useState } from 'react';

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = useState(null);
  const inputRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmitUsername(inputRef.current.value);
  }

  const handleChange = (e) => {
    const value = inputRef.current.value;

    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }
  

  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleChange} type="text" id='usernameInput' ref={inputRef}/>
        {error ? <div style={{color: 'red'}} role='alert'>{error}</div> : null}
      </div>
      <button disabled={error} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
