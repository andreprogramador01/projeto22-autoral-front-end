import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "../contexts/LagContext";
import Home from "../pages/Home"


import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login"


export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes> 
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />            
           
            <Route path="/home" element={<Home />} />
           
          </Routes> 
      </UserProvider>
    </BrowserRouter>
  )
}