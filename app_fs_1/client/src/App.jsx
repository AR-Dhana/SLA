import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./component/admin/AdminLogin";
import SuperAdminLogin from "./component/admin/SuperAdminLogin";
import AdminDashboard from "./component/admin/AdminDashboard";
import AddNewBreeds from "./component/admin/AddNewBreeds";
import DataTable from "./component/common_components/DataTable";
import Customer_Admin_Login from "./component/Customer_Admin_Login";
import Customer_login from "./component/customer/Customer_login";
import AdminRegister from "./component/admin/AdminRegister";
import CustomerSignup from "./component/customer/CustomerSignup";
import CustomerCart from "./component/customer/CustomerCart";
import OrderStatus from "./component/customer/OrderStatus";
import PaymentStatus from "./component/customer/PaymentStatus";
import PlaceOrder from "./component/customer/PlaceOrder";
import ProductList from "./component/customer/ProductList";


function App() {

  return (
    <>
      <Router>
        {/* Base route */}
        <Routes>
          <Route path="/" element={<Customer_Admin_Login />} />
        </Routes>


        {/* super admin flow parent route */}
        <Routes>
          <Route path="/super-admin" element={<SuperAdminLogin />} />
        </Routes>


        {/* admin flow parent route */}
        <Routes>
          <Route path="/admin-register" element={<AdminRegister />} />
        </Routes>

        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>

        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} >
            <Route path="dashboard" element={<DataTable />} />
            <Route path="breed" element={<AddNewBreeds />} />
            {/* <Route path="feedings" element={<AdminLogin />} />
            <Route path="quarantine" element={<AddNewBreeds />} />
            <Route path="invoice" element={<SuperAdminLogin />} /> */}
            <Route path="shop" element={<AddNewBreeds />} />
            <Route path="logout" element={<AdminDashboard />} />
          </Route>
        </Routes>


        {/* customer flow parent route */}
        <Routes>
          <Route path="/customer-register" element={<CustomerSignup />} />
        </Routes>


        <Routes>
          <Route path="/customer-login" element={<Customer_login />} />
        </Routes>
        <Routes>
          <Route path="/customer-cart" element={<CustomerCart />} />
        </Routes>
        <Routes>
          <Route path="/customer-order" element={<OrderStatus />} />
        </Routes>
        <Routes>
          <Route path="payment" element={<PaymentStatus />} />
        </Routes>
        <Routes>
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
        <Routes>
          <Route path="/prod" element={<ProductList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
