import './App.css';
import { Login } from './components/Login';
import { User_name } from './components/User_name';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { Add_contact } from './components/Add_contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="user_name" element={<User_name />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="filter" element={<Filter />} />
          <Route path="add-contact" element={<Add_contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
