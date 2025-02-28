
/*(correct code)
  import { useState, useEffect } from "react";
  import axios from "axios";
  import NotebookList from "./components/NotebookList";
  import MessageList from "./components/MessageList";
  import AddNotebookModal from "./components/AddNotebookModal";
  import "./App.css";
  
  export default function App() {
    const [notebooks, setNotebooks] = useState([]);
    const [selectedNotebook, setSelectedNotebook] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/notebooks")
        .then(res => setNotebooks(res.data))
        .catch(err => console.error(err));
    }, []);
  
    return (
      <div className="app-container">
        
        <div className="left-column">
          <NotebookList 
            notebooks={notebooks} 
            setSelectedNotebook={setSelectedNotebook} 
          />
          <button className="add-notebook-btn" onClick={() => setShowModal(true)}>
            + Add Notebook
          </button>
        </div>
  
        
        <div className="right-column">
          <MessageList selectedNotebook={selectedNotebook} />
        </div>
  
        
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <AddNotebookModal 
                setNotebooks={setNotebooks} 
                closeModal={() => setShowModal(false)} 
              />
            </div>
          </div>
        )}
      </div>
    );
  }
  */ /*
  import { useState, useEffect } from "react";
  import axios from "axios";
  import NotebookList from "./components/NotebookList";
  import MessageList from "./components/MessageList";
  import AddNotebookModal from "./components/AddNotebookModal";
  import "./App.css";
  
  export default function App() {
    const [notebooks, setNotebooks] = useState([]);
    const [selectedNotebook, setSelectedNotebook] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/notebooks")
        .then(res => setNotebooks(res.data))
        .catch(err => console.error(err));
    }, []);
  
    return (
      <div className="app-container">
        <div className="left-column">
          <button className="add-notebook-btn" onClick={() => setShowModal(true)}>
            Add Notebook
          </button>
          <NotebookList notebooks={notebooks} setSelectedNotebook={setSelectedNotebook} />
        </div>
        
        <div className="right-column">
          <MessageList selectedNotebook={selectedNotebook} />
        </div>
  
        {showModal && <AddNotebookModal setNotebooks={setNotebooks} setShowModal={setShowModal} />}
      </div>
    );
  }   */


    import { useState, useEffect } from "react";
    import axios from "axios";
    import NotebookList from "./components/NotebookList";
    import MessageList from "./components/MessageList";
    import AddNotebookModal from "./components/AddNotebookModal";
    import "./App.css";
    
    export default function App() {
      const [notebooks, setNotebooks] = useState([]);
      const [selectedNotebook, setSelectedNotebook] = useState(null);
      const [showModal, setShowModal] = useState(false);
    
      useEffect(() => {
        axios.get("http://localhost:5000/api/notebooks")
          .then(res => setNotebooks(res.data))
          .catch(err => console.error(err));
      }, []);
    
      return (
        <div className="app-container">
          <div className="left-column">
            <button className="add-notebook-btn" onClick={() => setShowModal(true)}>
              <span className="plus-symbol">+</span>
            </button>
            <NotebookList notebooks={notebooks} setSelectedNotebook={setSelectedNotebook} />
          </div>
          
          <div className="right-column">
            <MessageList selectedNotebook={selectedNotebook} />
          </div>
      
          {showModal && <AddNotebookModal setNotebooks={setNotebooks} setShowModal={setShowModal} />}
        </div>
      );
    }