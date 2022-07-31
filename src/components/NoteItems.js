import React from "react";
import {NavLink, } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';



function NoteItems(props) {

 let content=props.note.ops[0].insert;

    return (
        
        <NavLink to={`/notes/${props.note.id}`} style={{textDecoration: "none"}}>
            <div className="note-item-container">
                <div className="note-item">
                <div className="note-item-header">
                <p>{content}</p>
                </div>
                <div className="note-item-content">
                <p>{content}</p> 
                </div>
                <div className="note-item-footer">
                    <p className="note-item-time">{props.note.updated}</p>
                  
                </div>
                </div>
            </div>
        </NavLink>
    )


}

export default NoteItems