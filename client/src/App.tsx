<<<<<<< HEAD
import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
=======
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
>>>>>>> 4f40845c6499c61f67e9f42aafe2bd3be62ee510

export default function App() {
  return (
    <>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
>>>>>>> 4f40845c6499c61f67e9f42aafe2bd3be62ee510
      </Routes>
    </>
  )
}
