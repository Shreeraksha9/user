
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/displayuser" element={<DisplayUser/>} />
    </Routes>
  );
}

export default App;
