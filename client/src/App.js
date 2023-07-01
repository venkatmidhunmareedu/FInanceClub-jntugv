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

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path='/' element={< Home />}></Route> 
        <Route exact path='/blog' element={< BlogPage />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
