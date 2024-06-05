import NewPasswordForm from '@/components/auth/new-password-form'
import React from 'react'
import RegistrationLottie from '@/components/auth/authlottie/RegistrationLottie'

export default function NewPassword() {
  return (
    <div className="flex flex-col md:flex-row md:mt-[24px]">
      <div className="w-full md:p-[24px] lg:p-[32px] md:pt-28 lg:pt-32"><NewPasswordForm></NewPasswordForm></div>
      <div className="w-full"><RegistrationLottie></RegistrationLottie></div>
    </div>
    
  )
}
