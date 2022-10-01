import React, { useEffect,useState } from 'react';
import { TextareaAutosize, Button} from "@mui/material";
import socketIO from "socket.io-client";
import ReactScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
let ENDPOINT = "http://localhost:5000/";
// eslint-disable-next-line
let socket;
let Profile_Name = window.localStorage.getItem("name");
let message_val;
export const Chat = (props) => {
  const [id ,setid]=useState("");
  const [text,settext] = useState("");
  const [messages, setmessages] = useState([]);
  const user = props.userId;
 
  const submit = ()=>{
     message_val = document.getElementById("chatinput").value;
     socket.emit("message",{message:message_val,id});
     document.getElementById('chatinput').value = "";
  }

useEffect(() => {
  socket = socketIO(ENDPOINT,{ transports:['websocket']});
  console.log(socket);
  
  socket.on("connect",()=>{
      alert("Connected");
      setid(socket.id);
  })
  socket.emit('joined',{user});
  socket.on('welcome',(data)=>{
    setmessages([...messages,data]);
    console.log(data.message);
  })
  socket.on('userjoined',(data)=>{
    setmessages([...messages,data]);
    console.log(data.user,data.message);
  })
  socket.on('leave',(data)=>{
    setmessages([...messages,data]);
    console.log(data.message,data.user);
  })
  return () => {
      socket.emit('disconnected');
      socket.off();
  }
},[]);

useEffect(() => {
  socket.on("sendmessage",(data)=>{
   setmessages([...messages,data]);
    console.log(data.message,data.user,data.id);
  }) 

  return () => {
    socket.off();
  }
}, [messages])


  return (
    <div>
        <div className="classroom">
            <div class="Member">
                <h1>School Common Chat</h1>
            </div>
            <div class="Message">
            <ReactScrollToBottom className='chatbox'>
         {messages.map((element,i)=>{
          return <Message user={(element.id === id) ?'' :element.user} message={element.message} mov={(element.id === id) ? 'right' : 'left'}/>
         })}
         </ReactScrollToBottom>
            </div>
            <div className="Text-area">
                <h5>message</h5>
                <TextareaAutosize
                    minRows={3}
                    placeholder="Type... <Message>"
                    style={{ minWidth: "80%" }}
                    id="chatinput"
                    value={text}
                    onChange={(e)=>{settext(e.target.value)}}
                  />
                  
                    {console.log(messages)}
            <Button onClick={submit} color="secondary">Send</Button>
          </div>
          <div class="profile-view">
                <h3>{Profile_Name}</h3>
          </div>
        </div>
    </div>
  )
}
