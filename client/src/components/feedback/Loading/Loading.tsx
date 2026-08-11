import type { TError, TLoading } from "@/utils/types"

type LoadingProps = {
   status: TLoading;
   error: TError;
   children: React.ReactNode
}
const Loading = ({ children, error, status }: LoadingProps) => {

   if (status === "pending") {
      return (
         <p>Loading please wait...</p>
      )
   }

   if (status === "failed") {
      return (
         <p>{error}</p>
      )
   }

   return (
      <>{children}</>
   )
}

export default Loading