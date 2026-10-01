import styles from "./styles.module.css"

interface IProductInfoProps {
   title: string;
   price: number;
   img: string;

   direction?: "row" | "column"
   style?: React.CSSProperties;
   children?: React.ReactNode
}

const ProductInfo = ({ title, price, img, children, direction = "row" }: IProductInfoProps) => {
   return (
      <div className={`${styles[`product-${direction}`]}`}>
         <div className={`${styles[`productImg-${direction}`]}`}>
            <img
               src={img}
               alt={title}
            />
         </div>

         <div className={`${styles[`productInfo-${direction}`]}`}>
            <h2 title={title}>{title}</h2>

            <h3>{price.toFixed(2)} EGP</h3>

            {children}
         </div>
      </div >
   )
}

export default ProductInfo