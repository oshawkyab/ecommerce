import { configureStore } from '@reduxjs/toolkit'
// reducers
import categories from "./categories/CategoriesSlice"
import products from "./products/productSlice"

export const store = configureStore({
   reducer: {
      categories,
      products
   },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch