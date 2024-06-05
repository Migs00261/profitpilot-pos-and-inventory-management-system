import React from 'react'
import LoginLottie from '@/components/auth/authlottie/LoginLottie'
import LoginForm from '@/components/auth/login-form'
export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row md:mt-[24px] lg:mt-[32px]">
      <div className="w-full md:p-[24px] lg:p-[32px]"><LoginForm></LoginForm></div>
      
      <div className="w-full md:p-[16px] lg:p-[24px]">
           <LoginLottie></LoginLottie>
        </div>

    </div>
    
  )
}
