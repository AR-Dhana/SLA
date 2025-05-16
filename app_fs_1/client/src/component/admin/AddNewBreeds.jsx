// import React from 'react';
// import { Form, Button, Row, Col, Container } from 'react-bootstrap';

// const AddNewBreeds = () => {
//   return (
//     <Container className="p-4" style={{ backgroundColor: '#7aa5e9', borderRadius: '8px', width: 'fit-content' }}>
//       <h5 className="text-white mb-4">Add New Breed</h5>
//       <Form>
//         <Form.Group as={Row} className="mb-3" controlId="clientName">
//           <Form.Label column sm={4} className="text-white">Breed Name</Form.Label>
//           <Col sm={8}>
//             <Form.Control type="text" placeholder="Enter name" />
//           </Col>
//         </Form.Group>

//         <Form.Group as={Row} className="mb-3" controlId="project">
//           <Form.Label column sm={4} className="text-white">Project</Form.Label>
//           <Col sm={8}>
//             <Form.Control type="text" placeholder="Enter project" />
//           </Col>
//         </Form.Group>

//         <Form.Group as={Row} className="mb-3" controlId="location">
//           <Form.Label column sm={4} className="text-white">Location</Form.Label>
//           <Col sm={8}>
//             <Form.Control type="text" placeholder="Enter location" />
//           </Col>
//         </Form.Group>

//         <Form.Group as={Row} className="mb-3" controlId="workers">
//           <Form.Label column sm={4} className="text-white">Workers</Form.Label>
//           <Col sm={8}>
//             <Form.Control type="number" placeholder="Enter workers" />
//           </Col>
//         </Form.Group>

//         <Form.Group as={Row} className="mb-3" controlId="field1">
//           <Form.Label column sm={4} className="text-white">Field 1</Form.Label>
//           <Col sm={8}>
//             <Form.Select>
//               <option>Select</option>
//               <option>Option 1</option>
//               <option>Option 2</option>
//             </Form.Select>
//           </Col>
//         </Form.Group>

//         <Form.Group as={Row} className="mb-4" controlId="field2">
//           <Form.Label column sm={4} className="text-white">Field 2</Form.Label>
//           <Col sm={8}>
//             <Form.Select>
//               <option>Select</option>
//               <option>Option A</option>
//               <option>Option B</option>
//             </Form.Select>
//           </Col>
//         </Form.Group>

//         <div className="text-center">
//           <Button variant="light" className="me-2">Save</Button>
//           <Button variant="light" className="me-2">Clear</Button>
//           <Button variant="light">Back</Button>
//         </div>
//       </Form>
//     </Container>
//   );
// };

// export default AddNewBreeds;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddNewBreeds = () => {
  const [formData, setFormData] = useState({
    breid_id: '',
    breid_weight: '',
    breid_colour: '',
    breid_category: '', // default
    breid_health_status: '', // default
    breid_sales_status: '', // default
    breid_quantity: '',
    breid_image: null, // for file upload
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      breid_image: e.target.files[0]
    }));
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('breid_id', formData.breid_id);
    data.append('breid_weight', formData.breid_weight);
    data.append('breid_colour', formData.breid_colour);
    data.append('breid_category', formData.breid_category);
    data.append('breid_health_status', formData.breid_health_status);
    data.append('breid_sales_status', formData.breid_sales_status);
    data.append('breid_quantity', formData.breid_quantity);
    if (formData.breid_image) {
      data.append('breid_image', formData.breid_image);
    }

    try {
      const res = await axios.post('http://localhost:5000/sample/add-new-breid', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(res.data.message);

      if (res.data.message === "Breed Added Successfully") {
        // Clear form after success
        setFormData({
          breid_id: '',
          breid_weight: '',
          breid_colour: '',
          breid_category: '',
          breid_health_status: '',
          breid_sales_status: '',
          breid_quantity: '',
          breid_image: null,
        });
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
      {/* <div className="bg-success bg-opacity-50 d-flex justify-content-between p-3">
        <div>
          <img src="/snail.png" alt="logo" />
        </div>
        <div>
          <Link to="/admin-dashboard">
            <button className="btn btn-primary">Back to Dashboard</button>
          </Link>
        </div>
      </div> */}

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="w-100" style={{ maxWidth: '600px' }}>
          <h4 className="text-center mb-4">Add New Breed</h4>

          <input
            type="text"
            className="form-control mb-3"
            name="breid_id"
            placeholder="Enter Breed ID"
            value={formData.breid_id}
            onChange={handleChange}
          />
          <input
            type="number"
            step="0.01"
            className="form-control mb-3"
            name="breid_weight"
            placeholder="Enter Breed Weight (kg)"
            value={formData.breid_weight}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="breid_colour"
            placeholder="Enter Breed Colour"
            value={formData.breid_colour}
            onChange={handleChange}
          />

          <select
            className="form-select mb-3"
            name="breid_category"
            value={formData.breid_category}
            onChange={handleChange}
          >
            <option value="" disabled>--select--</option>
            <option value="goat">Goat</option>
            <option value="hen">Hen</option>
            <option value="fish">Fish</option>
          </select>

          <select
            className="form-select mb-3"
            name="breid_health_status"
            value={formData.breid_health_status}
            onChange={handleChange}
          >
            <option value="" disabled>--select--</option>
            <option value="healthy">Healthy</option>
            <option value="sick">Sick</option>
            <option value="under-treatment">Under Treatment</option>
          </select>

          <select
            className="form-select mb-3"
            name="breid_sales_status"
            value={formData.breid_sales_status}
            onChange={handleChange}
          >
            <option value="" disabled>--select--</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="reserved">Reserved</option>
          </select>

          <input
            type="number"
            className="form-control mb-3"
            name="breid_quantity"
            placeholder="Enter Quantity"
            value={formData.breid_quantity}
            onChange={handleChange}
          />

          <input
            type="file"
            className="form-control mb-3"
            name="breid_image"
            accept="image/*"
            onChange={handleFileChange}
          />

          <button className="btn btn-primary w-100 mb-3" onClick={handleSubmit}>
            Add Breed
          </button>

          {message && <div className="alert alert-info">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default AddNewBreeds;
