import React, { useState, useEffect } from 'react';
import './createNew.css';
import DateInput from './dateInput.js';
import Gender from './gender.js';
import { useUserInitialization } from './users.js';
import TakePhoto from './takePhoto';


function CreateNew() {
  useEffect(() => {

    

  
    // Initialize Bootstrap popover when component mounts
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new window.bootstrap.Popover(popoverTriggerEl);
    });

    // Add event listener to close popover when clicking outside
    const handleDocumentClick = (event) => {
      const popover = document.querySelector('.popover');
      if (popover && !popover.contains(event.target)) {
        popoverTriggerList.forEach((popoverTriggerEl) => {
          const popoverInstance = window.bootstrap.Popover.getInstance(popoverTriggerEl);
          if (popoverInstance) {
            popoverInstance.hide();
          }
        });
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const { users, setUsers } = useUserInitialization();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [yearError, setYearError] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');
  const [photo, setPhoto] = useState(null); // Add this line to declare setPhoto
  const [photoError, setPhotoError] = useState(''); // Add this line to declare photoError
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/;


  const handlePhotoSelect = (selectedPhoto) => {
    setPhoto(selectedPhoto); // Update the photo state with the selected photo
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Validate password
    if (!passwordRegex.test(newPassword)) {
      setPasswordError('Invalid password. Password must be 8-14 characters long and contain at least one letter and one number.');
      setShowPasswordError(true);
    } else {
      setPasswordError('');
      setShowPasswordError(false);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const newPassword = event.target.value;
    setConfirmPassword(newPassword);

    // Check if passwords match
    if (newPassword !== password) {
      setPasswordError('Passwords do not match');
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };
  

  
  const handleSubmit = (event) => {
    event.preventDefault();
   
    //date
    if (!year || !month || !day) {
      setYearError('Please select birthday date');
      return;
    } else {
      setYearError('');
    }
    //age
    if (year > 2010) {
      setYearError('Sorry, it\'s not possible to open an account under 14');
      return;
    } else {
      setYearError('');
    }
    //gender
    if (!gender) {
      setGenderError('Please select gender');
      return;
    } else {
      setGenderError('');
    }

    // photo
    if (!photo) {
      setPhotoError('Please upload a photo');
      return;
    } else {
      setPhotoError('');
    }



    // Check if the email already exists in the array of users
    const userEmail = document.getElementById('email').value;
    const emailExists = users.some(user => user.email === userEmail);
    if (emailExists) {
      setEmailError('Email is already in use');
      return;
    } else {
      setEmailError('');
    }

    // If all validations pass, create a new user object
    const newUser = {
     
      email: userEmail,
      password: password,
      dob: `${year}-${month}-${day}`,
      gender: gender,
      photo: photo 
    };
    
    // Add the new user to the array of users
    setUsers([...users, newUser]);

  };

  return (
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Sign up</h1>
          </div>
          
          <div className="create-new-modal">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <div className="col">
                  <input type="email" className="form-control" id="email" placeholder="Email" required />
                  {emailError && <div className="text-danger">{emailError}</div>}
                </div>
              </div>
              <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} required data-bs-toggle="tooltip" data-bs-placement="right" title="The password must consists of 8-14 combination of letters and numbers"/>
                </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} onBlur={handleConfirmPasswordChange} required />
                {showPasswordError && <div className="text-danger">{passwordError}</div>}
              </div>
              <DateInput year={year} setYear={setYear} month={month} setMonth={setMonth} day={day} setDay={setDay} yearError={yearError} />
              <Gender onChange={handleGenderChange} genderError={genderError} />
              <TakePhoto onPhotoSelect={handlePhotoSelect} />
              {photoError && <div className="text-danger">{photoError}</div>}
              <div className="modal-footer">
                
                <button type="submit" className="btn btn-primary" >Register</button>

              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CreateNew;

// data-bs-dismiss="modal"disabled={va}