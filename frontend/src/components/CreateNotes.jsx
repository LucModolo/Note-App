import React, {useState} from "react";
import axios from "axios";


function CreateNote() {
    const [input, setInput] = useState({
            title: '',
            content: '',
            date: new Date()
    })
   
   
    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }


     function handleClick(event){
         event.preventDefault();
         const newNote = {
             title: input.title,
             content: input.content,
             date: input.date
         }
         axios.post('http://localhost:3001/create', newNote)
    }
   
      
   return <div className='container'>
        <h1>Create Note page</h1>
    
    <form>
        <div className='form-group'>
        <textarea onChange={handleChange} name="title" value={input.title} autoComplete="off"  className="form-control" placeholder="Node Title"></textarea>
        </div>
        <div className='form-group'>
            <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off"  className="form-control" placeholder="Node Content"></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-info">ADD NODE</button>
    </form>
    
    </div>
}

export default CreateNote;