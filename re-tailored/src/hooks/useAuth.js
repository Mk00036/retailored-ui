import { useState } from 'react';
import { AuthService } from '../services/authService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const requestOtp = async (mobile) => {
    try {
      setLoading(true);
      const response = await AuthService.login(mobile);
      return response.otp;
    } catch (err) {
      console.error(err);
      setError('Failed to send OTP');
      return null;
    } finally {
      setLoading(false);
    }
  };

const verifyOtp = async (mobileNumber, otp) => {
    try {
      setLoading(true);
      const response = await AuthService.otpVerify(mobileNumber, otp);
      return response;
    } catch (err) {
      setError("OTP verification failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    requestOtp,
    verifyOtp,
  };
};
