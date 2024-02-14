import React, { useState, useEffect } from 'react';
import './createNew.css'; // Import the CSS file
import DateInput from './dateInput.js';
import Gender from './gender.js';
import { useUserInitialization } from './users.js';

function CreateNew() {
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
  const [gender, setGender] = useState('male'); // State for gender
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/;

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
      setPasswordError('');
      setShowPasswordError(false);
    }
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (year > 2010) {
      setYearError('Year cannot be greater than 2010');
      return; // Prevent further execution if year is invalid
    } else {
      setYearError('');
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
      gender: gender
    };

    // Add the new user to the array of users
    setUsers([...users, newUser]);

    // Close modal or perform any necessary action
    closeModal();
  };

  const closeModal = () => {
    // Implement modal close logic if needed
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
            <h1 className="modal-title fs-5" >Sign up</h1>
            it's quick and easy.
          
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <div className="col">
                  <input type="email" className="form-control" id="email" placeholder="Email" required />
                  {emailError && <div className="text-danger">{emailError}</div>}
                </div>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} required data-bs-toggle="tooltip" data-bs-placement="right" title="The password must consists of 8-14 combination of letters and numbers"/>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} onBlur={handleConfirmPasswordChange} required />
                {showPasswordError && <div className="text-danger">{passwordError}</div>}
              </div>

              <DateInput year={year} setYear={setYear} month={month} setMonth={setMonth} day={day} setDay={setDay} yearError={yearError} />
              <Gender onChange={handleGenderChange} />
           
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
