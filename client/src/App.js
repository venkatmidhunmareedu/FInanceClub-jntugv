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
import Events from "./pages/Events";
import Notifications from "./pages/Notifications";
import News from "./pages/News";
import Profile from "./pages/Profile";



function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/login" element={<Login />} > </Route>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/blog' element={< BlogPage />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/events' element={< Events />}></Route>
        <Route exact path='/notifications' element={< Notifications />}></Route>
        <Route exact path='/profile' element={< Profile />}></Route>
        <Route exact path='/news' element={< News />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
