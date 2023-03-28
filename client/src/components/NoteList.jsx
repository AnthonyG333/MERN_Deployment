// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NoteList = (props) => {

//     const { noteList } = props;

//     const sorter = (filter) => {
//         if(filter === "asc"){
//             noteList.sort((a,b)=>{return b.id - a.id});
//         }
//         if(filter === "desc"){
//             noteList.sort((a,b)=>{return a.id - b.id});
//         }
//         setNoteList([...noteList]);
//     }


//     return (
//         <div>
//             <button onClick={()=>sorter("asc")}>Sort by Newest</button>
//             <button onClick={()=>sorter("desc")}>Sort by Oldest</button>
//             <table>
//                 <tr>
//                     <th>Note Title:</th>
//                     <th>Note Body:</th>
//                 </tr>
//                 {
//                     noteList.map((eachNote, index) =>
//                         <tr key={index}>
//                             <td>
//                                 {eachNote.title}
//                             </td>
//                             <td>
//                                 {eachNote.body}
//                             </td>
//                             <td>
//                                 <Link to={`/notes/update/${eachNote._id}`}>edit note</Link>
//                             </td>
//                         </tr>
//                     )
//                 }
//             </table>
//         </div>
//     );
// }

// export default NoteList;