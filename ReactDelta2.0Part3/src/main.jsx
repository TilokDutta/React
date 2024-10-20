import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductTab from './productTab.jsx'
import Form from './form.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ProductTab/> */}
    <Form/>
  </StrictMode>,
)
