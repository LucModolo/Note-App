import React, {useEffect, useState} from "react";


function Notes() {
    const [notes,setNotes] = useState([{
        title: '',
        content: ''
    }])
    
    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })

    return <div className='container'>
        <h3>Notes page</h3>
        {notes.map(note =>
            <div>
                <h5>{note.title}</h5>
                <p>{note.content}</p>
            </div>
            )}

    </div>
}

export default Notes;