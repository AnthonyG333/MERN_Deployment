import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import Header from '../components/Header';


const UpdateForm = () => {

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const navigate = useNavigate();

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
            .then((response) => {
                console.log(response.data);
                setTitle(response.data.title);
                setBody(response.data.body);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedNote = { title, body }
        axios.put(`http://localhost:8000/api/notes/update/${id}`, updatedNote)
            .then((response) => {
                console.log(response.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorMessage = [];

                for (const eachKey in errorResponse) {
                    errorMessage.push(errorResponse[eachKey].message);
                }
                setErrors(errorMessage)
            })
    }

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/notes/${deleteId}`)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => { console.log(err) });
    }

    return (
        <div>
            <h1>Update Note</h1>
            <Header></Header>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Note title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </p>
                <p>
                    <label>Note body:</label>
                    <input type="body" value={body} onChange={(e) => setBody(e.target.value)}></input>
                </p>
                <button type="submit">Update Note</button>
            </form>
            <button onClick={() => handleDelete(id)}>Delete Note</button>
            {
                errors.map((eachError, index) =>
                    <p key={index} style={{ color: "red" }}> {eachError} </p>
                )
            }
        </div>
    );
}

export default UpdateForm;