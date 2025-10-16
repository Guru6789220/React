import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Styles/index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
