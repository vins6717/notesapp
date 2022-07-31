import React, {useState, useEffect} from "react";
//import notes from '../Data';
import NoteItems from "./NoteItems";
import AddNote from "./AddNote";


function Sidebar (props) {

    const [notes, setNotes] = useState([]);
    

    const getNotes = async () => {
        let response = await fetch(`http://localhost:8000/notes`);
        let data = await response.json();
        setNotes(data)
    }

    useEffect(() => {
        getNotes();
    }, [])


    return (
        <div className="sidebar-container">
            <div className="header">
                <h2>Notes</h2>
            </div>
            <AddNote 
                id={props.id}
                notes={notes}
                
            />
            {notes.map((note) =>(
                <NoteItems 
                    key={note.id}
                    note={note}
                    id={note.id}
                    notes={notes}
                    
                />
            ))}
        </div>
    )
}




export default Sidebar