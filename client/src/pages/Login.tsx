import { useRef } from 'react'
import axios from 'axios'

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const submitHandler = async (e: any) => {
    e.preventDefault()

    await axios
      .post(
        'http://localhost:8080/auth/login/',
        {
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
          
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
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
          type='email'
          placeholder='Enter email..'
          className='input-field'
          ref={emailRef}
          required
        />
        <input
          type='password'
          placeholder='Enter password..'
          className='input-field'
          ref={passwordRef}
          required
        />
        <input type='submit' value='Login' className='input-submit' />
      </form>
    </div>
  )
}

export default Login
