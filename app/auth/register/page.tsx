import React from 'react'
import RegisterForm from '@/components/auth/register-form'
import RegistrationLottie from '@/components/auth/authlottie/RegistrationLottie'
export default function RegisterPage() {
  return (
    <div className="flex flex-col md:flex-row md:mt-[24px]">
      <div className="w-full md:p-[24px] lg:p-[32px]"><RegisterForm></RegisterForm></div>
      <div className="w-full md:p-[16px] lg:p-[24px]"><RegistrationLottie></RegistrationLottie></div>
    </div>
    
  )
}
