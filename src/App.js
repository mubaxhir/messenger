import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel , Input, IconButton} from '@material-ui/core';
import './App.css';
import Messege from './Messege';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { Icon } from '@material-ui/core';


function App() {
  const [input, setInput] = useState("");
  const [messeges, setMesseges] = useState([
    // { username:"mubashir", messege:"i love you"},
    // { username:"nadia", messege:"i love you too"}
  ]);
  const [username, setUsername] = useState('');

  // useState is a variable in REACT
  // useEffect = run code on conditions in REACT

  useEffect(() => {
    // run code once when the app components loads
    db.collection('messeges')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMesseges(snapshot.docs.map(doc => ({id:doc.id, messege: doc.data()})))
    });
  }, []) 

  useEffect(() => {
    setUsername(prompt("please enter your name"))
  }, []) //condition

  const sendMessege = (event) => {
    // all the logic to send messege gose
    event.preventDefault();

    db.collection('messeges').add({
      messege: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }


  return (
    <div className="App">
      <img src="data:image/png;base64,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" width="100" height="100"/>
      <h1>messenger</h1>
  <h2>Welcome {username}</h2>

      <form className="app_form">
        <FormControl className="app__formcontrol">
          {/* <InputLabel>Enter a messege ...</InputLabel> */}
        <Input className="app__input" placeholder="Enter a messege..." value={input} onChange={event => setInput(event.target.value)} />

        <IconButton className="app__button" disabled={!input} onClick={sendMessege} type="submit" variant="contained" color="primary" >

          <SendIcon/>
        </IconButton>
      </FormControl>

      </form>
      <FlipMove>
        {
          messeges.map(({id, messege}) => (
            <Messege key={id} username={username} messege={messege} />
          ))
        }
      </FlipMove>
      

    </div>
  );
}

export default App;
