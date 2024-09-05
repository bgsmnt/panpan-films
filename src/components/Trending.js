import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Image, Overlay } from "react-bootstrap";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY
      }
    }).then((response) => {
      setMovies(response.data.results.slice(0, 6))
    })
  }, [])

  return (
    <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
      <Row>
        {movies.map((result, index) => {
          return (
            <Col md={4} className="movieWrapper" id="action" key={index}>
            <Card className="movieImage">
              <Image src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${result.poster_path}`} alt="test" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">{result.title}</Card.Title>
                  <Card.Text className="text-left">
                    {result.release_date}
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          )
        })}
      </Row>
    </Container>
  );
};

export default Trending;