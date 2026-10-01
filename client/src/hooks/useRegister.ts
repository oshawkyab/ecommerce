import useChekEmailAvailability from "@/hooks/useChekEmailAvailability"
import { actAuthRegister, resetUI } from "@/store/auth/authSlice"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { signUpSchema, type TSignUpFields } from "@/valiations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const useRegister = () => {

   const dispatch = useAppDispatch()
   const { loading, error, accessToken } = useAppSelector((state) => state.auth)
   const navigate = useNavigate()

   const { register, trigger, handleSubmit, getFieldState, formState: { errors } } = useForm<TSignUpFields>({ mode: "onBlur", resolver: zodResolver(signUpSchema) })

   const { checkEmailAvailability, resetEmailAvailability, emailAvailabilityStatus, enterdEmail } = useChekEmailAvailability()

   const registerSubmit: SubmitHandler<TSignUpFields> = (data) => {

      const { firstName, lastName, password, email } = data
      dispatch(actAuthRegister({ firstName, lastName, password, email })).unwrap().then(() => {
         navigate("/login?status=email_created", { replace: true })
         toast.success("The account has been created")
      })

   }

   // clean up errors 
   useEffect(() => {
      return () => {
         dispatch(resetUI())
      }
   }, [dispatch])



   const onBlurEmailAddress = async (e: React.FocusEvent<HTMLInputElement>) => {
      await trigger("email")
      const value = e.target.value
      const { invalid, isDirty } = getFieldState("email")

      if (isDirty && !invalid && enterdEmail !== value) {
         // checking
         checkEmailAvailability(value);
      }

      if (enterdEmail && invalid) {
         resetEmailAvailability()
      }

   }

   return { loading, error, accessToken, registerSubmit, register, errors, handleSubmit, emailAvailabilityStatus, onBlurEmailAddress }
}

export default useRegister