/* eslint-disable react-hooks/set-state-in-effect */
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IHeaderCounterProps {
   totalQuantity: number;
   svgIcon: React.ReactNode;
   href: string
}

const { basketContainer, totalNum, pumpCartQuantity, basketCart } = styles;

const HeaderCounter = ({ totalQuantity, svgIcon, href }: IHeaderCounterProps) => {

   const [isAnimate, setIsAnimate] = useState(false)
   const quantityStyle = `${totalNum} ${isAnimate ? pumpCartQuantity : ""}`;

   useEffect(() => {
      if (!totalQuantity) return

      setIsAnimate(true)

      const timer = setTimeout(() => {
         setIsAnimate(false)
      }, 300)

      return () => {
         clearTimeout(timer)
      }
   }, [totalQuantity])

   return (
      <Link to={href} className={basketContainer}>
         <div className={basketCart}>
            {svgIcon}
            <div className={quantityStyle}>{totalQuantity}</div>
         </div>
      </Link>
   );
};

export default HeaderCounter;