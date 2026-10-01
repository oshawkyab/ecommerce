import { GridList, Heading, Product } from "@/components/eCommerce"
import { Loading } from "@/components/feedback"
import useWishlist from "@/hooks/useWishlist"
import { Lottie } from "lottie-react"
import empty from "@/assets/lotties/empty.json"

const Wishlist = () => {
   const { loading, error, records } = useWishlist()
   return (
      <>
         <Heading title="Your Wishlist" />
         <Loading type="products" status={loading} error={error}>
            {records.length === 0 && (
               <Lottie
               className="mx-auto w-80"
               src={empty}
               autoplay
               />
            )}
            <GridList records={records} renderItem={(record) => <Product key={record.id} {...record} />} />
         </Loading>
      </>
   )
}

export default Wishlist