import './App.css'
import Header from './Components/Header'
import { Route,Routes } from "react-router-dom"
import Cart from './Pages/Cart'
import Home from './Pages/Home'

function App() {
  return (
   <div>
        <div>
          <Header/>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          
        </div>

   </div>
  )
}
export default App
