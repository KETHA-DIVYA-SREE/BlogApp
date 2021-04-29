import { Row, Col, Container, Image } from 'react-bootstrap';
import './../../App.css';
import './Home.css'

function Master() {
    return (
        <>
        <Container>
        <Row>
            <Col xs={12} md={8}>
                <figure className="position-relative" >
                    <Image className="img-fluid MasterImage1" src="https://akshardham.com/gujarat/wp-content/supersized-slides/monument.jpg" rounded />
                    <figcaption>
                        <p>Title of vertical gallery</p>
                        <p className="Date">Travel/ August 21 2017</p>
                    </figcaption>
              </figure>
            </Col>
            <Col xs={12} md={3}>
                <Row>
                <figure className="position-relative" >
                    <Image className="img-fluid MasterImage2" src="https://cdn.s3waas.gov.in/s396ea64f3a1aa2fd00c72faacf0cb8ac9/uploads/bfi_thumb/2018081648-olwaoumh8tu9theigxs01k04e390cpfn78rjm79zv8.jpg" alt="Master Image 1" rounded />
                    <figcaption className="figcaption2">
                        <p>The Sound cloud</p>
                        <p>You loved is doomed</p>
                        <p className="Date">Travel/ August 21 2017</p>
                    </figcaption>
                </figure>
                </Row>
                <Row>
                <figure className="position-relative" >
                    <Image className="img-fluid MasterImage2" src="https://cdn.s3waas.gov.in/s396ea64f3a1aa2fd00c72faacf0cb8ac9/uploads/bfi_thumb/2018081648-olwaoumh8tu9theigxs01k04e390cpfn78rjm79zv8.jpg" alt="Master Image 1" rounded />
                    <figcaption className="figcaption2">
                        <p>The Sound cloud</p>
                        <p>You loved is doomed</p>
                        <p className="Date">Travel/ August 21 2017</p>
                    </figcaption>
                </figure>
                </Row>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default Master;