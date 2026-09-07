import { createSelector } from "@reduxjs/toolkit"
import type { RootState } from "../index"

const getQuantityCartSelector = createSelector(
   (state: RootState) => state.cart.items,
   (items) => {
      console.log(items)
      return Object.values(items).filter((el) => {
         return typeof el === "number" && !isNaN(el) && el > 0
      } ).reduce((acc, current) => {
         return acc + current

      }, 0)
   }
)

const getWishlistItemsNumber = createSelector(
   (state: RootState) => state.wishlist.itemsId,
   (items) => {
      return items.length
   }
)

export { getQuantityCartSelector, getWishlistItemsNumber }