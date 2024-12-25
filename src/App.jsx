import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Signin from './Pages/Signin.jsx';
import Signup from './Pages/Signup.jsx';
import About from './Pages/About.jsx';
import Profile from './Pages/Profile.jsx';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<Signin />} />
    <Route path='/sing-up' element={<Signup />} />
    <Route path='/About' element={<About />} />
    <Route path='/profile' element={<Profile />} />
  </Routes>
  </BrowserRouter>
}
