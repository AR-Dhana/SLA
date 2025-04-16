import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");

  const handleUpload = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/images/upload", formData);
      alert("Upload success!");
    } catch (err) {
      alert("Upload failed.");
    }
  };

  return (
    <div>
      <h3>Upload Image</h3>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default ImageUpload;
