import styles from "./styles.module.css";


const CartSubtotalPrice = ({total}: {total: number}) => {

   return (
      <div className={styles.container}>
         <span>Subtotal:</span>
         <span>{total.toFixed(2)} EGP</span>
      </div>
   );
};

export default CartSubtotalPrice;