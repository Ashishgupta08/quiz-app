import React from 'react';
import './App.css';
import { Onboarding, Home, LeaderBoard, Profile, Login } from './Pages/index';
import { Question } from './Components/index';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Onboarding />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/quiz/:id' element={<Question />}></Route>
        <Route path='/leaderBoard' element={<LeaderBoard />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>

  );
}

export default App;