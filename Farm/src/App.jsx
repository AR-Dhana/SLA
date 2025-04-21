import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// component import section
import { Dashboard } from './components/Dashboard'
import { AdminLogin } from './components/admin/AdminLogin'
import ImageUpload from './components/admin/ImageUpload'
import Gallery from './components/customer/Gallery'
import AddProduct from './components/admin/AddProduct'


// this is the functional component
function App() {
  return (
    // State Declaration section we can access this state via props

    // router section
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/upload-img" element={<ImageUpload />} />
        <Route path="/gallary-img" element={<Gallery />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;