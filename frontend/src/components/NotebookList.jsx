/*(correct code)
  export default function NotebookList({ notebooks, setSelectedNotebook }) {
    return (
      <div className="notebook-list">
        {notebooks.length === 0 ? (
          <p className="no-notebooks">No notebooks available</p>
        ) : (
          notebooks.map((notebook) => (
            <div 
              key={notebook._id} 
              className="notebook-item" 
              style={{ backgroundColor: notebook.color }}
              onClick={() => setSelectedNotebook(notebook)}
            >
              {notebook.name}
            </div>
          ))
        )}
      </div>
    );
  }
  */

  export default function NotebookList({ notebooks, setSelectedNotebook }) {
    return (
      <div className="notebook-list">
        {notebooks.map((notebook) => (
          <div 
            key={notebook._id} 
            className="notebook-item"
            style={{ backgroundColor: notebook.color }}
            onClick={() => setSelectedNotebook(notebook)}
          >
            {notebook.name}
          </div>
        ))}
      </div>
    );
  }
  