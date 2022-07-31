import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};



function NotePage(){

    const [note, setNote] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    
  

   
//Set the original stat of the note
    useEffect(() => {

        const getNote = async () => {
            let response = await fetch(`http://localhost:8000/notes/${id}`);
            let data = await response.json();
            setNote(data);
        }
        getNote();

    }, [id])

//Monitor any changes of the note
    function onChange(content, delta, source, editor){
        setNote(editor.getContents());
    }

//Save any changes of our note

const saveNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: 
            JSON.stringify({
                ...note,
                'updated': new Date()
            })
        }

    )}

function handleSave(event) {
    event.preventDefault();
    saveNote(); 
}

//Delete the note if necessary

const deleteNote = async () => {

    await fetch(`http://localhost:8000/notes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })

    navigate('/')
}





    return(
        <div className="note-page-container">
        
            {/* <textarea
                placeholder="Add Note Here..."
                className="note-page-textarea"
                value={note.content}
                onChange={onChange}
             /> */}

        <ReactQuill
            modules={modules}
            theme="snow"
            placeholder="Add Note Here..."
            className="note-page-textarea"
            value={note}
            onChange={onChange}

        />

            <FontAwesomeIcon 
                icon={faFloppyDisk}
                className="note-page-save-icon"
                onClick={handleSave}   
            />

            <FontAwesomeIcon
                icon={faTrashCan}
                className="note-page-trash-icon"
                onClick={deleteNote}
            />





        </div>
    )
}



export default NotePage