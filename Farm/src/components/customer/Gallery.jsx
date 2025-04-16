import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/images/all").then((res) => {
      console.log('sssssssss', res.data)
      setImages(res.data);
    });
  }, []);

  return (
    <div>
      <h3>Image Gallery</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {images.map((img) => (
          <img
            key={img.id}
            src={`${img.path}`}
            alt="ssss"
            style={{ width: "15%", height: "auto", border: "3px solid #ccc" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
