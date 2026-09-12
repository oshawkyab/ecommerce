import axios from "axios"
import { useState } from "react"

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "faild"

const useChekEmailAvailability = () => {
   const [emailAvailabilityStatus, setEmailAvailabilityStatus] = useState<TStatus>("idle")
   const [enterdEmail, setEnterdEmail] = useState<null | string>(null)

   const checkEmailAvailability = async (email: string) => {
      setEnterdEmail(email);
      setEmailAvailabilityStatus("checking");
      try {
         const response = await axios.get(`/users?email=${email}`);
         if (!response.data.length) {
            setEmailAvailabilityStatus("available");
         } else {
            setEmailAvailabilityStatus("notAvailable");
         }
      } catch (error) {
         console.log(error)
         setEmailAvailabilityStatus("faild");
      }
   };

   const resetEmailAvailability = () => {
      setEmailAvailabilityStatus("idle")
      setEnterdEmail(null)
   }
   return { enterdEmail, checkEmailAvailability, emailAvailabilityStatus, resetEmailAvailability }
}

export default useChekEmailAvailability