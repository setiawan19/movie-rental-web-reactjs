import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieDetail = ({ selectedMovie, onAddToCart }) => {
  return (
    <Card className="movie-detail">
      <Card.Img variant="top" src={'https://via.placeholder.com/150'} alt={selectedMovie.title} />
      <Card.Title>{selectedMovie.title}</Card.Title>
      <Card.Text>{selectedMovie.opening_crawl}</Card.Text>
      <Button className='my-2' variant="warning" onClick={() => onAddToCart(selectedMovie)}>Add to Cart</Button>
    </Card>
  );
};

export default MovieDetail;
