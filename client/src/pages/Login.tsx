<<<<<<< HEAD
import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e: any) => {
    e.preventDefault()

    // paste your code here
=======
import { useRef } from 'react'
import axios from 'axios'

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const submitHandler = async (e: any) => {
    e.preventDefault()

    await axios
      .post('http://localhost:8080/auth/login/', {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
>>>>>>> 4f40845c6499c61f67e9f42aafe2bd3be62ee510
  }

  return (
    <div
      className='auth clap-width'
      style={{
        height: '650px',
        width: '400px',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={submitHandler}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <input
<<<<<<< HEAD
          type='text'
          placeholder='Enter login..'
          className='input-field'
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <input
          type='password'
          placeholder='Enter password..'
          className='input-field'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type='submit' value='Login' className='input-submit' />
        <Link to='/register'>Don't have an account?</Link>
=======
          type="email"
          placeholder="Enter email.."
          className="input-field"
          ref={emailRef}
          required
        />
        <input
          type="password"
          placeholder="Enter password.."
          className="input-field"
          ref={passwordRef}
          required
        />
        <input type="submit" value="Login" className="input-submit" />
>>>>>>> 4f40845c6499c61f67e9f42aafe2bd3be62ee510
      </form>
    </div>
  )
}

export default Login
