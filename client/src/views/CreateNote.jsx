import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'


const CreateNote = (props) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {title, body}
        axios.post("http://localhost:8000/api/notes/new", newNote)
            .then((response) => {
                console.log(response.data);
                navigate("/")
            })
            .catch(err => {
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorMessage = [];

                for (const eachKey in errorResponse) {
                    errorMessage.push(errorResponse[eachKey].message);
                }
                setErrors(errorMessage)
            })
    }

    return (
        <div>
            <h1>Create Note</h1>
            <Header></Header>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Note title:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
                </p>
                <p>
                    <label>Note body:</label>
                    <input type="text" onChange={(e) => setBody(e.target.value)}></input>
                </p>
                <button type="submit">Create Note</button>
            </form>
            {
                errors.map((eachError, index) => 
                    <p key={index} style={{ color: "red" }}> {eachError} </p>
                )
            }
        </div>
    );
}

export default CreateNote;