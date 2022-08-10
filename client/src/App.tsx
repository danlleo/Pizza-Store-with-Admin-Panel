import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Login from './pages/Login'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='dashboard'>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Navigate to={'/dashboard'} />} />
        </Route>
        <Route path='login' element={<Navigate to={'/dashboard/login'} />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </>
  )
}

function Layout() {
  return (
    <>
      <Header />
      <Cart />
      <Home />
      <Footer />
    </>
  )
}

function DashboardLayout() {
  return <></>
}
