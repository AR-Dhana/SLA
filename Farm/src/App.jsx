import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// component import section
import { Dashboard } from './components/Dashboard'
import { AdminLogin } from './components/admin/AdminLogin'
import ImageUpload from './components/admin/ImageUpload'
import Gallery from './components/customer/Gallery'

function App() {
  return (
    // State Declaration section

    // router section
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/upload-img" element={<ImageUpload />} />
        <Route path="/gallary-img" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
