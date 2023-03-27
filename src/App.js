import React,{ useContext } from 'react';
import{ BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from './pages/editProfile/EditProfile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/profile/Profile';
import { DarkModeContext } from './context/DarkModeContext';
import './App.css';
import './style/Dark.css';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
           <Routes>
               <Route path="/">
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route index element={<Home />} />
                  <Route path="profile">
                      <Route path=":userId" element={<Profile />} />
                      <Route path=":userId/edit" element={<EditProfile />} />
                  </Route>
               </Route>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
