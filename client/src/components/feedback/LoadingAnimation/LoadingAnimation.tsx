import Loading from "@assets/lotties/loading.json"
import { Lottie } from "lottie-react"
const LoadingAnimation = () => {
   return (
      <div className="w-full">
         <Lottie
            src={Loading}
            className="mx-auto mt-[15%] w-60"
            loop
            autoplay
         />
      </div>
   )
}

export default LoadingAnimation