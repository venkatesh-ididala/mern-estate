
import { BrowserRouter,Routes,Route }  from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import  Profile from './pages/Profile.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';



export default function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>

    </BrowserRouter>
  )
}
