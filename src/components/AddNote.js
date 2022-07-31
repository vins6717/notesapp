import React from "react";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function AddNote(props){

    const createNote = async () => {

        await fetch(`http://localhost:8000/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
                JSON.stringify({
                    'ops':[{
                        'insert': ""
                    }],
                    'updated': new Date()
                })
            })
    }

    function handleCreate(){
        createNote();
    }



    return(
        
       
            <button className="add-note" onClick={handleCreate}>
                <FontAwesomeIcon icon={faPlusCircle} className="add-note-icon"/>ADD NOTE
            </button>
        
    )
}

export default AddNote