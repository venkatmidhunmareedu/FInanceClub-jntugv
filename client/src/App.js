import React from "react";
import Home from "./pages/Home";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
