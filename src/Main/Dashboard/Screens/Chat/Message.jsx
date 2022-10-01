import React from 'react'
import './Message.css';

const Message = ({user,message,mov}) => {
   if(user){
    return(
      <>
        <div className={`messageBox ${mov}`}>{`${user}:${message}`}</div>
      </>
    )
  }else{
    return(
      <>
        <div className='messageBox right'>{`You: ${message}`}</div>
      </>
    )
  }
}

export default Message;