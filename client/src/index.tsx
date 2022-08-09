<<<<<<< HEAD
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { BrowserRouter as Router } from "react-router-dom"

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
>>>>>>> 4f40845c6499c61f67e9f42aafe2bd3be62ee510
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
