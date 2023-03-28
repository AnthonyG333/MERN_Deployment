import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import NoteList from '../components/NoteList';
import { Link } from 'react-router-dom';

const Main = () => {

    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
            .then((response) => {
                console.log(response.data);
                setNoteList(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const sorter = (filter) => {
        if(filter === "latest"){
            setNoteList([...noteList].sort((a,b)=> b.updatedAt.localeCompare(a.updatedAt)))
            console.log(noteList)
        }
        if(filter === "oldest"){
            setNoteList([...noteList].sort((a,b)=> a.updatedAt.localeCompare(b.updatedAt)))
            console.log(noteList)
        }
    }

    return (
        <div>
            <div>
                <h1>Note Wall</h1>
                <h3>Leave a Note</h3>
                <button><Link to="/notes/create">Write a Note</Link></button>
            </div>
            <div>
            <button onClick={()=>sorter("latest")}>Sort by Newest</button>
            <button onClick={()=>sorter("oldest")}>Sort by Oldest</button>
            <table>
                <tr>
                    <th>Note Title:</th>
                    <th>Note Body:</th>
                </tr>
                {
                    noteList.map((eachNote, index) =>
                        <tr key={index}>
                            <td>
                                {eachNote.title}
                            </td>
                            <td>
                                {eachNote.body}
                            </td>
                            <td>
                                <Link to={`/notes/update/${eachNote._id}`}>edit note</Link>
                            </td>
                        </tr>
                    )
                }
            </table>
        </div>
        </div>
    );
}

export default Main;