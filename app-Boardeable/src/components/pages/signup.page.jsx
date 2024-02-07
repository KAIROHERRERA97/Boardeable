import React, { useContext } from 'react'
import SignupTemplate from '../templates/signup.template';
import { ToastContext } from '../../context/auth-toast.context';

export default function SignupPage() {

 const data = useContext(ToastContext);

  return <div className="mt-24 flex justify-center">
    <SignupTemplate></SignupTemplate>
  </div>;
}
