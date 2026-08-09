import { Container } from "react-bootstrap"
import styles from "./styles.module.css"

const { footerContainer } = styles
const Footer = () => {
   const date = new Date()
   return (
      <Container className={footerContainer}>© {date.getFullYear()} Our Ecom. All rights reserved.</Container>
   )
}

export default Footer