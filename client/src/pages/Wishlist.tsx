import { GridList, Heading, Product } from "@/components/eCommerce"
import { Loading } from "@/components/feedback"
import useWishlist from "@/hooks/useWishlist"


const Wishlist = () => {
   const { loading, error, records } = useWishlist()
   return (
      <>
         <Heading title="Your Wishlist" />
         <Loading type="products" status={loading} error={error}>
            <GridList records={records} renderItem={(record) => <Product {...record} />} />
         </Loading>
      </>
   )
}

export default Wishlist