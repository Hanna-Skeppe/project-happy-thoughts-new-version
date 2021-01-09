import React, { useState, useEffect } from 'react'

import HappyForm from './HappyForm'
import SortList  from './SortList'
import HappyList from './HappyList'
import './index.css'

export const App = () => {
  const [messages, setMessages] = useState([]); //useState in App to be able to compare states between components 
  const [sort, setSort] = useState('default');
  const MESSAGES_URL = 'https://happy-thoughts-hanna.herokuapp.com/thoughts';
  
  //GET: Fetch messages from API:
  const fetchMessages = () => {
    fetch(`${MESSAGES_URL}/?sort=${sort}`)
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error(error))
  };
  
  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line
  }, [sort]);
  // Warning in console when I have "sort" as dependency (but works): 
  //"React Hook useEffect has a missing dependency: 'fetchMessages'. Either include it or remove the dependency array" 

  //POST: Add a thought (message), (reach HappyForm):
  const postHappyMessage = (newMessage, name) => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage, name: name })
    })
      .then(() => fetchMessages()) //After posting new message, fetch messages.
      .catch(error => console.error(error))
  };
  
  //POST: Add a like-heart to a thought
  const postThoughtLike = id => {
    fetch(`https://happy-thoughts-hanna.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => fetchMessages())
  };

  return (
    <div className="app-wrapper">
      <HappyForm onMessageChange={postHappyMessage} />
      <SortList onChange={(event) => setSort(event.target.value)} />
      <HappyList messageList={messages} handleThoughtLike={postThoughtLike} />
    </div>
  );
};
