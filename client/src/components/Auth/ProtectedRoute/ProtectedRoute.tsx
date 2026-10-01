import { useAppSelector } from "@/store/hook"
import toast from "react-hot-toast"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAppSelector(state => state.auth)

  // check authorized
  if (!accessToken) {
    toast.error("You have to login first")
    return <Navigate to="/login" />
  }

  return (
    <>{children}</>
  )
}

export default ProtectedRoute