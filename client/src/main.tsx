import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
// styles
import "./styles/main.css"
import "bootstrap/dist/css/bootstrap.min.css"
// router
import AppRouter from './routes/AppRouter';
// store
import { prisistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import "./services/global-axios"

createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
      <PersistGate persistor={prisistor} loading={null}>
         <AppRouter />
      </PersistGate>
   </Provider>
)
