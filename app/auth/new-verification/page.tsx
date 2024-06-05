import React from 'react'
import { NewVerificationForm } from '@/components/auth/new-verification-form'
import VerificationLottie from '@/components/auth/authlottie/Verification'
function NewVerificationPage() {
  return (
    <div className="flex flex-col md:flex-row md:mt-[24px]">
      <div className="w-full md:p-[24px] lg:p-[32px] md:pt-28 lg:pt-32"><NewVerificationForm></NewVerificationForm></div>
      <div className="w-full"><VerificationLottie></VerificationLottie></div>
    </div>
    
  )
}

export default NewVerificationPage