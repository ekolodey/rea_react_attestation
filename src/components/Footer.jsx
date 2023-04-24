import { Container, Row } from "react-bootstrap";
import star from '../images/star.svg'
import social_icons from '../images/social-icons.svg'

export default function Footer(){
    return (
        <footer className="footer mt-auto">
            <Container>
                <Row>
                    <div className="col-md-3 p-3 border border-dark border-3 d-flex align-items-center">
                        <img src={star} alt="social-icons"/>
                        <div className="p-3 text-center"><strong>Japan Cosmetics</strong> - элитная косметика</div>
                    </div>
                    <div className="col d-flex p-3 align-items-center justify-content-end">
                    <a href="#"><img src={social_icons} alt="social-icons"/></a>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}