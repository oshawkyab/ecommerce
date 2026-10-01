import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { signInSchema, type SignInTypes } from '@/valiations'
import { actAuthLogin, resetUI } from '@/store/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { useNavigate, useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const useLogin = () => {

   const { register, handleSubmit, formState: { errors } } = useForm<SignInTypes>({ mode: "onBlur", resolver: zodResolver(signInSchema) })

   const [searchParams, setSearchParams] = useSearchParams()

   const navigate = useNavigate()
   const dispatch = useAppDispatch()
   const { loading, error, accessToken } = useAppSelector(state => state.auth)

   const submit: SubmitHandler<SignInTypes> = (data) => {
      setSearchParams("")

      dispatch(actAuthLogin(data)).unwrap().then(() => {
         toast.success("You are Logged in successfully")
         navigate("/", { replace: true })
      }).catch((err) => {
         toast.error(err)
      })

   }

   // clean up errors 
   useEffect(() => {
      return () => {
         dispatch(resetUI())
      }
   }, [dispatch])




   return { register, accessToken, searchParams, loading, error, errors, handleSubmit, submit }
}

export default useLogin