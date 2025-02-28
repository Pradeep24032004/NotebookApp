 /*(correct code)
  import { useState } from "react";
  import axios from "axios";
  
  export default function AddNotebookModal({ setNotebooks, closeModal }) {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#ffffff");
  
    const addNotebook = () => {
      if (name.trim() === "") return;
  
      axios.post("http://localhost:5000/api/notebooks", { name, color })
        .then(res => {
          setNotebooks(prev => [...prev, res.data]);
          setName("");
          closeModal();
        });
    };
  
    return (
      <div className="modal-content">
        <h2>Add a Notebook</h2>
        <input 
          className="modal-input"
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Notebook Name"
        />
        <input 
          type="color" 
          className="color-picker"
          value={color} 
          onChange={e => setColor(e.target.value)} 
        />
        
        <button className="modal-btn" onClick={addNotebook}>Add Notebook</button>
        <button className="modal-close-btn" onClick={closeModal}>Close</button>
      </div>
    );
  }
  */
/*
  import { useState } from "react";
import axios from "axios";

export default function AddNotebookModal({ setNotebooks, setShowModal }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("red");

  const colors = ["red", "green", "blue", "yellow"];

  const addNotebook = () => {
    if (!name.trim()) return;

    axios.post("http://localhost:5000/api/notebooks", { name, color })
      .then(res => {
        setNotebooks(prev => [...prev, res.data]);
        setName("");
        setShowModal(false);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Notebook</h3>
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Notebook Name"
        />
        
        <select className="color-picker" value={color} onChange={e => setColor(e.target.value)}>
          {colors.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <div className="modal-actions">
          <button onClick={addNotebook}>Add</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}  */
  import { useState } from "react";
  import axios from "axios";
  
  export default function AddNotebookModal({ setNotebooks, setShowModal }) {
    const [name, setName] = useState("");
    const [color, setColor] = useState("red");
  
    const colors = ["red", "green", "blue", "yellow"];
  
    const addNotebook = () => {
      if (!name.trim()) return;
  
      axios.post("http://localhost:5000/api/notebooks", { name, color })
        .then(res => {
          setNotebooks(prev => [...prev, res.data]);
          setName("");
          setShowModal(false);
        });
    };
  
    return (
      <div className="modal">
        <div className="modal-content">
          <h3>Add Notebook</h3>
          <input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="Notebook Name"
          />
          
          <div className="color-selection">
            {colors.map(c => (
              <label key={c} className="color-option">
                <input 
                  type="radio" 
                  name="color" 
                  value={c} 
                  checked={color === c} 
                  onChange={() => setColor(c)} 
                />
                <span className="color-circle" style={{ backgroundColor: c }}></span>
              </label>
            ))}
          </div>
  
          <div className="modal-actions">
            <button onClick={addNotebook}>Add</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
  

