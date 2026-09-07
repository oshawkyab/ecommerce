/* eslint-disable react-hooks/set-state-in-effect */
import styles from "./styles.module.css";
import Wishlist from "@assets/svg/wishlist.svg?react"
import { useAppSelector } from "@/store/hook";
import { getWishlistItemsNumber } from "@/store/selectors";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { container, totalNum, pumpCartQuantity, basketCart } = styles;

const HeaderWishlist = () => {

   const [isAnimate, setIsAnimate] = useState(false)
   const totalQuantity = useAppSelector(getWishlistItemsNumber);
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
      <Link to={"/wishlist"} className={container}>
         <div className={basketCart}>
            <Wishlist className={"w-10 h-10"} title="wishlist icon" />
            {totalQuantity > 0 && <span className={quantityStyle}>{totalQuantity}</span>}
         </div>
      </Link>
   );
};

export default HeaderWishlist;