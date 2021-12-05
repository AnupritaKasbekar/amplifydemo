import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './Create';
import reportWebVitals from './reportWebVitals';
import { Route,Routes,Navigate, BrowserRouter as Router } from 'react-router-dom';
import Update from './Update';
import Delete from './Delete';
import GetList from './GetList';
import Search from './Search';


ReactDOM.render(
  <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/Create" element={<Create/>}></Route>
        <Route path="/Update" element={<Update/>}></Route>
        <Route path="/Delete" element={<Delete/>}></Route>
        <Route path="/GetList" element={<GetList/>}></Route>
        <Route path="/Search" element={<Search/>}></Route>
      
        <Route path="/nav" element={<Navigate replace to="/Create"/>}></Route>
      </Routes>
  </Router>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
