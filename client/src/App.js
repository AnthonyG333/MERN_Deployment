import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import CreateNote from './views/CreateNote';
import UpdateNote from './views/UpdateNote';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/notes/create" element={<CreateNote />}></Route>
        <Route path="/notes/update/:id" element={<UpdateNote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
