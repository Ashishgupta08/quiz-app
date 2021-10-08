import React from 'react';
import './App.css';
import { Onboarding, Home, LeaderBoard, Profile, Login, Quiz, Result } from './Pages/index';
import { Question } from './Components';
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoutes/PrivateRoute'
import ReactNotification from 'react-notifications-component'

function App() {

  return (
    <div>
      <ReactNotification />
      <Routes>
        <Route path='/' element={<Onboarding />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Login />}></Route>
        <PrivateRoute path='/home' element={<Home />} />
        <PrivateRoute path='/quiz/:id' element={<Quiz />} />
        <PrivateRoute path='/play/:id' element={<Question />} />
        <PrivateRoute path='/result' element={<Result />} />
        <PrivateRoute path='/leaderBoard' element={<LeaderBoard />} />
        <PrivateRoute path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;