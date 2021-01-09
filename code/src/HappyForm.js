import React, { useState } from 'react'

import './HappyForm.css'

const HappyForm = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('');
  const [name, setName] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    onMessageChange(newMessage, name);
    setNewMessage("");
    setName("");
  };

  return (
    <section className="happy-form-container"> 
      <form className="happy-form"> 
        <h3 
        className="happy-form-heading"
        tabIndex="0"
        >
          What is making you happy right now?
        </h3>
        {/* <div className="happy-form-text-input">  */}
          <label htmlFor="message"></label>
          <textarea
            placeholder="Type your happy thought..."
            tabIndex="0"
            aria-label="message"
            aria-required="true"
            rows="3"
            value={newMessage}
            onChange={event => setNewMessage(event.target.value)} 
            className={
              newMessage.length > 140
              ? "happy-form-text-too-long" 
              : "happy-form-text"
            }
          >
          </textarea>
          <label htmlFor="name"></label>
          <input
            className="happy-form-name-input"
            type="text"
            aria-label="name"
            aria-required="false"
            placeholder="Type your name (optional)"
            tabIndex="0"
            value={name}
            onChange={event => setName(event.target.value)}
            />
        {/* </div> */}
        <div className="form-footer" tabIndex="0" > 
          <button
            type="submit"
            tabIndex="0"  
            aria-label="submit-button-add-message"
            onClick={handleSubmit} 
            disabled={
              newMessage.length < 6 || newMessage.length > 140 
              ? true 
              : false
            } 
            className={ 
              newMessage.length < 6 || newMessage.length > 140 
              ? "happy-form-input-button-disabled" 
              : "happy-form-input-button"
            }
            value="Add Message"
          >
            {/* eslint-disable-next-line */}
          <span>❤️ Send Happy Thought! ❤️</span>
          </button>
          <p aria-hidden="true">{newMessage.length} / 140</p>
        </div>
      </form>
    </section>
  );
};
export default HappyForm;