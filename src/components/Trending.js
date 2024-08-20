import { Card, Container, Row, Col, Image } from "react-bootstrap";
import deadpoolImage from "../assets/images/trending/deadpool.jpg";
import interstellar_water from "../assets/images/trending/interstellar_water.jpg";
import ipar from "../assets/images/trending/Ipar Adalah Maut.png";
import jatuh from "../assets/images/trending/jatuh.jpg";
import joker from "../assets/images/trending/joker.jpg";
import wed from "../assets/images/trending/wed.jpg";

const Trending = () => {
  return (
    <Container>
        <br />
        <h1 className="text-white" id="trending">TRENDING MOVIES</h1>
        <br />
      <Row>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={deadpoolImage} alt="deadpool movie" className="images"/>
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">DEADPOOL WOLVERINE</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={interstellar_water} alt="deadpool movie" className="images"/>
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">INTERSTELLAR</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={ipar} alt="deadpool movie" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">IPAR ADALAH MAUT</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={jatuh} alt="deadpool movie" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">JATUH CINTA SEPERTI DI FILM-FILM</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={joker} alt="deadpool movie" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">JOKER</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={wed} alt="deadpool movie" className="images"/>
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">WEDNESDAY</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
