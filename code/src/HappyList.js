import React from 'react'
import moment from 'moment'

import './HappyList.css'

const HappyList = ({ messageList, handleThoughtLike }) => {

  return (
    <section className="happy-post-container">
      {messageList.map(message => (
        <article
          className="happy-post"
          tabIndex="0"
          aria-label="posted-message-in-list"
          key={message._id}
        >
          <div className="happy-post-header">
            <p
              className="happy-message"
              tabIndex="0"
              aria-label={message.message}
            >
              {message.message}
            </p>
            <span
              className="happy-message-name"
              tabIndex="0"
              aria-label={message.name}
            >
              Sent by: {message.name}
            </span>
          </div>
          <div className="happy-post-footer">
            <span className="happy-likes-wrapper">
              <button
                type="button"
                tabIndex="0"
                aria-label="add-a-like-heart-to-this-message"
                onClick={() => handleThoughtLike(message._id)}
                className={
                  message.hearts > 5
                    ? "many-likes"
                    : message.hearts > 0
                      ? "some-likes"
                      : "no-likes"
                }
              >
                <span
                  className="like-heart"
                  role='img'
                  aria-label='Heart'
                >
                  {"❤️"}
                </span>
              </button>
              <p>x {message.hearts}</p>
            </span>
            <span
              className="happy-message-time"
              tabIndex="0"
              aria-label={moment(message.createdAt).fromNow()}
            >
              {moment(message.createdAt).fromNow()}
            </span>
          </div>
        </article>
      ))
      }
    </section>
  );
};
export default HappyList;