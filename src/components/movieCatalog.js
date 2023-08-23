import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const MovieCatalog = ({
  movies = [], 
  onShowDetail = () => {}, 
  addToCart = () => {}
  }) => {
  return (
    <Col className="movie-list" sm={12} md={9} lg={8}>
      <Row>
        <h2>Movie Catalog</h2>
        {movies.length > 0 && movies.map((movie, index) => (
          <Card key={index} className="col-sm-5 m-2 movie-item pt-3">
            <Card.Img variant="top" src={`https://via.placeholder.com/150`} alt={movie.title} />
            <Card.Title>
              <p>{movie.title}</p>
            </Card.Title>
            <Card.Text>{movie.opening_crawl}</Card.Text>
            <Button variant="primary" onClick={() => onShowDetail(movie)}>Detail</Button>
            <Button className='my-2' variant="warning" onClick={() => addToCart(movie)}>Add to Cart</Button>
          </Card>
        ))}
      </Row>
    </Col>
  );
};

export default MovieCatalog;
