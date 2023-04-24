import { Col, Container, Nav, Row } from "react-bootstrap";
import logo from '../images/logo.svg'

export default function Header(){
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <a href="/"><img src={logo} alt="Japan Cosmetics"/></a>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Nav>
                            <Nav.Item><Nav.Link href="/cart">Корзина</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/favorites">Избранное</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/about">О нас</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}