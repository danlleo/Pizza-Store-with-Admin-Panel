import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e: any) => {
    e.preventDefault()

    // paste your code here
  }

  return (
    <div
      className='auth clap-width'
      style={{
        height: "650px",
        width: "400px",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <input
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
        <input type='submit' value='Register' className='input-submit' />
        <Link to='/login'>Already have an account?</Link>
      </form>
    </div>
  )
}

export default Register
