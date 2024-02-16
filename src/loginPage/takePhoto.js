import React, { useState } from 'react';
import './takePhoto.css'; // Import the CSS file

function TakePhoto({ onPhotoSelect }) {
  const [photo, setPhoto] = useState(null);


  const handlePhotoUpload = (event) => {
    const uploadedPhoto = event.target.files[0];
    setPhoto(uploadedPhoto);
    onPhotoSelect(uploadedPhoto); // Pass the uploaded photo to the parent component
  };

  return (
    <div className="mb-3">
      <div className="title" >Add photo</div>
      <input type="file" className="form-control small-input" id="photo" accept="image/*" onChange={handlePhotoUpload} />

    </div>
  );
}

export default TakePhoto;
