import React from 'react'
import ReactDOM from 'react-dom/client'
import { DogsAPI } from '../DogsAPI'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DogsAPI />
  </React.StrictMode>,
)
