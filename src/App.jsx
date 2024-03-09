import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from "./pages/Destination"
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Home from './pages/Home'
import '../src/CSSF/App.css'
import Heade from './component/Heade'
import SideNav from './component/Nav'

function App() {
  

  return (
    <div>

      <BrowserRouter>
      <Heade/>
      <SideNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App