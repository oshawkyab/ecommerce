import { createRoot } from 'react-dom/client'
// styles
import "./styles/main.css"
import "bootstrap/dist/css/bootstrap.min.css"
// router
import AppRouter from './routes/AppRouter';

createRoot(document.getElementById('root')!).render(<AppRouter />)
