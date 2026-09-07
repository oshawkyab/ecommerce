import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// reducers
import categories from "./categories/CategoriesSlice"
import products from "./products/productSlice"
import cart from "./cart/cartSlice"
import wishlist from "./wishlist/wishlistSlice"

// Configration for cart
const cartPersistConfig = {
   key: 'cart',
   storage: storage && (storage as any).default ? (storage as any).default : storage,
   whitelist: ["items"] // items, infoForProducts
};
// configration for wishlist
const wishlistPersistConfig = {
   key: 'wishlist',
   storage: storage && (storage as any).default ? (storage as any).default : storage,
   whitelist: ["itemsId"] // itemsId
};

// combineReducers === reducers in configration store
const rootReducer = combineReducers({
   categories,
   products,
   cart: persistReducer(cartPersistConfig, cart),
   wishlist: persistReducer(wishlistPersistConfig, wishlist)
})


// Default configration 
export const store = configureStore({
   reducer: rootReducer,
   // Serlizable Problem
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            // Ignore these action types
            ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

// Create a Prisistor to Provide App
export const prisistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch