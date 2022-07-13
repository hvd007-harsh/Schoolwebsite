import React, { useEffect } from 'react';
import { TextareaAutosize, Button} from "@mui/material";
import socketIO from "socket.io-client";
let ENDPOINT = "http://localhost:5000/";
let socket;
let userId;

export const Chat = (props) => {
  console.log(props.userId);
  userId = props.userId;
  socket = socketIO(ENDPOINT,{ transports:['websocket']});
useEffect(() => {

  console.log(socket);
  socket.on("connect",()=>{
       alert("Connected");
  })  
  socket.emit("joined",{userId});
  return () => {
      socket.emit('disconnection');
      socket.off();
  }
}, [])


  return (
    <div>
        <div className="classroom">
            <div class="Member">
                <h1>Member</h1>
            </div>
            <div class="Message">
                <h2>Message</h2>
            </div>
            <div class="Text-area">
                <h5>message</h5>
                <TextareaAutosize
                    minRows={3}
                    placeholder="Type... <Message>"
                    style={{ minWidth: "80%" }} />
                
            <Button color="secondary">Send</Button>
          </div>
          <div class="profile-view">
                <h3>Profile view </h3>
          </div>
        </div>
    </div>
  )
}
