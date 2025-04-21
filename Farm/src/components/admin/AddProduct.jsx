import React, { useState, useEffect } from 'react';
import API from '../../services/api';

const AddProduct = () => {
    const [breeds, setBreeds] = useState([]);
    const [formData, setFormData] = useState({
        bried_id: '',
        product_name: '',
        product_category: '',
        product_description: '',
        product_weight: '',
        product_price: '',
        product_discount_price: '',
        product_image: null,
        available_quantity: '',
    });

    useEffect(() => {
        API.get('/breeds').then((res) => {
            console.log('111111111111111',res)
            setBreeds(res.data);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, product_image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = new FormData();
        for (const key in formData) {
            payload.append(key, formData[key]);
        }

        try {
            await API.post('/admin/add-product', payload);
            alert('Product added successfully');
            setFormData({
                bried_id: '',
                product_name: '',
                product_category: '',
                product_description: '',
                product_weight: '',
                product_price: '',
                product_discount_price: '',
                product_image: null,
                available_quantity: '',
            });
        } catch (err) {
            alert('Error adding product');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white rounded shadow space-y-4">
            <h2 className="text-xl font-semibold text-center">Add New Product</h2>

            <select name="bried_id" value={formData.bried_id} onChange={handleChange} required className="w-full p-2 border">
                <option value="">Select Breed</option>
                {breeds.map((breed) => (
                    <option key={breed.bried_id} value={breed.bried_id}>
                        {breed.bried_category} - {breed.bried_weight}kg
                    </option>
                ))}
            </select>
            <br />
            <input type="text" name="product_name" placeholder="Product Name" value={formData.product_name} onChange={handleChange} required className="w-full p-2 border" />
            <br />

            <input type="text" name="product_category" placeholder="Category" value={formData.product_category} onChange={handleChange} required className="w-full p-2 border" />
            <br />

            <textarea name="product_description" placeholder="Description" value={formData.product_description} onChange={handleChange} className="w-full p-2 border" />
            <br />

            <input type="number" step="0.01" name="product_weight" placeholder="Weight" value={formData.product_weight} onChange={handleChange} className="w-full p-2 border" />
            <br />

            <input type="number" step="0.01" name="product_price" placeholder="Price" value={formData.product_price} onChange={handleChange} required className="w-full p-2 border" />
            <br />

            <input type="number" step="0.01" name="product_discount_price" placeholder="Discount Price" value={formData.product_discount_price} onChange={handleChange} className="w-full p-2 border" />
            <br />

            <input type="number" name="available_quantity" placeholder="Quantity" value={formData.available_quantity} onChange={handleChange} className="w-full p-2 border" />
            <br />

            <input type="file" name="product_image" accept="image/*" onChange={handleFileChange} className="w-full p-2 border" />
            <br />

            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Add Product</button>
            <br />
        </form>
    );
};

export default AddProduct;
