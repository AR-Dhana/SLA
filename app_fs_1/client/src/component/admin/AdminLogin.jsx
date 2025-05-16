// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminLogin = () => {
//   return (
//     <div>
//       <div className="bg-success bg-opacity-50 d-flex justify-content-between p-3">
//         <div>
//           <img src="/snail.png" alt="logo" />
//         </div>
//         <div>
//           <Link to="/super-admin">
//             <button className="btn btn-primary">Super Admin</button>
//           </Link>
//         </div>
//       </div>

//       <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
//         <div className="text-center w-100" style={{ maxWidth: '400px' }}>
//           <h4 className="mb-4">Welcome to Farm Management</h4>
//           <input type="text" className="form-control mb-3" placeholder="Enter Admin Id" />
//           <input type="password" className="form-control mb-3" placeholder="Enter Password" />
//           <button className="btn btn-primary w-100 mb-3">Login</button>
//           <p className="mb-0">Forget Password?</p>
//           <Link to="/super-admin" style={{ color: 'deepskyblue', fontSize: '0.9rem' }}>
//             OTP to Super Admin!
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/sample/admin-login', {
        admin_created_id: adminId,
        admin_created_password: adminPassword,
      });

      setMessage(res.data.message);

      if (res.data.message === "Login Successful") {
        // Navigate to Admin Dashboard (optional)
        window.location.href = '/admin-dashboard';
      }
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Server not reachable.");
      }
    }
  };

  return (
    <div>
      <div className="bg-success bg-opacity-50 d-flex justify-content-between p-3">
        <div>
          <img src="/snail.png" alt="logo" />
        </div>
        <div>
          <Link to="/super-admin">
            <button className="btn btn-primary">Super Admin</button>
          </Link>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="text-center w-100" style={{ maxWidth: '400px' }}>
          <h4 className="mb-4">Welcome to Farm Management</h4>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Admin Id"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
            Login
          </button>

          {message && <div className="alert alert-info">{message}</div>}

          <p className="mb-0">Forget Password?</p>
          <Link to="/super-admin" style={{ color: 'deepskyblue', fontSize: '0.9rem' }}>
            OTP to Super Admin!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
