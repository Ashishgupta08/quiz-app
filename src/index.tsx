import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, QuizContextProvider, UserContextProvider, CurrentQuizProvider } from "./Contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <AuthProvider>
          <QuizContextProvider>
            <UserContextProvider>
              <CurrentQuizProvider>
                <App />
              </CurrentQuizProvider>
            </UserContextProvider>
          </QuizContextProvider>
        </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);