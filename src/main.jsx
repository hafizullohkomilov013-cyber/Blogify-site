import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from "react-toastify";
import ProtectRouter from './components/ProtectRouter.jsx';

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer/>
  </>
);
