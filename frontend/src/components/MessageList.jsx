/*(correct code)
import { useState, useEffect } from "react";
import axios from "axios";

export default function MessageList({ selectedNotebook }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (selectedNotebook) {
      axios.get(`http://localhost:5000/api/messages/${selectedNotebook._id}`)
        .then(res => setMessages(res.data))
        .catch(err => console.error(err));
    }
  }, [selectedNotebook]);

  const sendMessage = () => {
    if (text.trim() === "") return;

    axios.post("http://localhost:5000/api/messages", {
      notebookId: selectedNotebook._id,
      text
    }).then(res => {
      setMessages([...messages, res.data]);
      setText("");
    });
  };

  return (
    <div className="message-container">
      {selectedNotebook ? (
        <>
          <h2 className="message-title">{selectedNotebook.name}</h2>
          <div className="message-list">
            {messages.length === 0 ? (
              <p className="no-messages">No messages yet</p>
            ) : (
              messages.map(msg => <p key={msg._id} className="message">{msg.text}</p>)
            )}
          </div>
          <div className="message-input-container">
            <input 
              className="message-input"
              value={text} 
              onChange={e => setText(e.target.value)} 
              placeholder="Type a message..."
            />
            <button className="send-btn" onClick={sendMessage}>Send</button>
          </div>
        </>
      ) : (
        <p className="select-notebook-msg">Select a notebook to start messaging</p>
      )}
    </div>
  );
} */
  import { useState, useEffect } from "react";
  import axios from "axios";
  
  export default function MessageList({ selectedNotebook }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
  
    useEffect(() => {
      if (selectedNotebook) {
        axios.get(`http://localhost:5000/api/messages/${selectedNotebook._id}`)
          .then(res => setMessages(res.data))
          .catch(err => console.error(err));
      }
    }, [selectedNotebook]);
  
    const sendMessage = () => {
      if (!text.trim()) return;
      
      axios.post("http://localhost:5000/api/messages", {
        notebookId: selectedNotebook._id,
        text
      }).then(res => {
        setMessages([...messages, res.data]);
        setText("");
      });
    };
  
    return (
      <div className="message-list">
        {selectedNotebook ? (
          <>
            <h2>{selectedNotebook.name}</h2>
            <div className="messages-container">
              {messages.map(msg => <p key={msg._id} className="message">{msg.text}</p>)}
            </div>
            <div className="message-input">
              <input value={text} onChange={e => setText(e.target.value)} placeholder="Type a message..." />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        ) : (
          <p className="placeholder-text">Select a notebook to start messaging</p>
        )}
      </div>
    );
  }
  