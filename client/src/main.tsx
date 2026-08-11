import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
// styles
import "./styles/main.css"
import "bootstrap/dist/css/bootstrap.min.css"
// router
import AppRouter from './routes/AppRouter';
// store
import { store } from './store';


createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
      <AppRouter />
   </Provider>
)
