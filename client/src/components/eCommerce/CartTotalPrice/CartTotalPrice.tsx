import { Button } from "react-bootstrap";
import styles from "./styles.module.css";


const CartSubtotalPrice = ({ total, userAccessToken }: { total: number, userAccessToken: string | null }) => {

   return (
      <>
         <div className={styles.container}>
            <span>Subtotal:</span>
            <span>{total.toFixed(2)} EGP</span>
         </div>

         {userAccessToken && (
            <div className={styles.container}>
               <span></span>
               <span>
                  <Button variant="success">
                     Order Place
                  </Button>
               </span>
            </div>
         )}
      </>
   );
};

export default CartSubtotalPrice;