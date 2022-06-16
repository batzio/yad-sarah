import './App.css';
import { Login } from './components/Login';
import { User_name } from './components/User_name';
import { List } from './components/List';
import { Filter } from './components/Filter';
import { Add_contact } from './components/Add_contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Send_file } from './components/Send_file';
import { useState } from 'react';
import { Edit_contact } from './components/Edit_contact';




function App() {
  const[emailList, setEmailList]=useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="user_name" element={<User_name />} />
          <Route path="list" element={<List/>} />
          <Route path="filter" element={<Filter setEmailList={setEmailList} />} />
          <Route path="add-contact" element={<Add_contact />} />
          <Route path="send-file" element={<Send_file emailList={emailList}/>} />
          <Route path="edit-contact" element={<Edit_contact/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
