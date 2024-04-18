import {useState} from 'react'
import { BrowserRouter as Router, Route,  Routes, Link } from 'react-router-dom';
import Bookmark from './Components/Bookmark';
import Home from './Pages/Home'
import BaseLayout from './layout/BaseLayout'
import About from './Components/About'
import Contact from './Components/Contact';
import LoginLayout from './layout/LoginLayout'
import Login from './Components/Login'
import ForgotPassword from './Components/ForgotPassword'
import EmailVerification from './Components/EmailVerification'
import ResetPassword from './Components/ResetPassword'
import './index.css'
import SearchBar from './Components/SearchBar';
function App() {
 

  return (
      <Router>
        <Routes>
          <Route  path="/" element={<BaseLayout/>} >
             <Route path="/bookmark" element={<Bookmark/>}/>
             <Route index element={<Home/>}/>
             <Route path="/About" element={<About/>}/>
             <Route path="/Contact" element={<Contact/>}/>
             <Route path="/Search" element={<SearchBar/>}/>
          </Route>
          <Route path="/auth" element={<LoginLayout/>}>
             <Route path="login" element={<Login/>}/> 
             <Route path="forgotPassword" element={<ForgotPassword/>}/> 
             <Route path="emailVerification" element={<EmailVerification/>}/> 
             <Route path="resetPassword" element={<ResetPassword/>}/> 
          </Route>
         </Routes>
      </Router>

     
  );
}

export default App;
