import React from "react";
import Home from "./pages/Home";
import BlogPage from "./pages/Blog";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
}
  from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Games from "./pages/Games";
import Profile from "./pages/Profile";
import BlogEdit from "./pages/BlogEdit";
import AwwSnapp from "./pages/AwwSnapp";



function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route exact path="/login" element={<Login />} > </Route>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/blog/:blogid' element={< BlogPage />}></Route>
          <Route exact path='/register_admin_blog' element={< Register />}></Route>
          <Route exact path='/events' element={< Events />}></Route>
          <Route exact path='/games' element={< Games />}></Route>
          <Route exact path='/profile' element={< Profile />}></Route>
          <Route exact path='/addBlog' element={< BlogEdit />}></Route>
          <Route exact path='/awwsnapp' element={< AwwSnapp />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div >
  );
}

export default App;
