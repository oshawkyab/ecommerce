import { Outlet } from "react-router-dom"
import styles from "./styles.module.css"
// components
import { Header } from "@/components/shared"
import { Container } from "react-bootstrap"
import { Footer } from "@/components/shared"

const { container } = styles
const MainLayout = () => {
   return (
      <Container className={container}>
         {/* header */}
         <Header />
         {/* content */}
         <main className="px-6 md:px-8 mb-10">
            <Container>
               <Outlet />
            </Container>
         </main>
         {/* footer */}
         <Footer />
      </Container>
   )
}

export default MainLayout