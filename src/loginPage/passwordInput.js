import { useState } from 'react';

export function usePasswordValidation() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
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

  return { password, confirmPassword, passwordError, showPasswordError, handlePasswordChange, handleConfirmPasswordChange };
}
