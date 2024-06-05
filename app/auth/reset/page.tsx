import ResetForm from "@/components/auth/reset-form"
import ForgotLottie from "@/components/auth/authlottie/ForgotLottie"
export default function ResetPage() {
  return (
    <div className="flex flex-col md:flex-row md:mt-[24px]">
      <div className="w-full md:p-[24px] lg:p-[32px]"><ResetForm/></div>
      <div className="w-full md:p-[16px] lg:p-[24px]"><ForgotLottie></ForgotLottie></div>
    </div>
    
  )
}
