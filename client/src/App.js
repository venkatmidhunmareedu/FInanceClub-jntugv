import React from "react";
import Home from "./pages/Home";
import BlogPage from "./pages/Blog";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
}
  from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/login" element={<Login />} > </Route> 
        <Route exact path='/' element={< Home />}></Route> 
        <Route exact path='/blog' element={< BlogPage />}></Route>
        <Route exact path='/register' element={< Register />}></Route>         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
