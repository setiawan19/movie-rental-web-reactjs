import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetail from './components/movieDetail';
import MovieCatalog from './components/movieCatalog';
import ShoppingCart from './components/shoppingCart';
import { Container, Modal, Row } from 'react-bootstrap';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const addToCart = (movie) => {
    setCartItems([...cartItems, movie]);
  };
  
  const onShowDetail = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const removeFromCart = (movieIndex) => {
    const updatedCart = cartItems.filter((item, index) => index !== movieIndex);
    setCartItems(updatedCart);
  };

  const getData = async ()=> {
    // Fetch movie data from swapi.dev API
    await fetch('https://swapi.dev/api/films/')
    .then(response => response.json())
    .then(data => setMovies(data.results))
    .catch(error => console.error('Error fetching movies:', error));
  }

  useEffect(() => {
    getData();
  }, [movies]);

  return (
    <Container className="App">
      <Row className='justify-content-center'>
        <MovieCatalog movies={movies} onShowDetail={onShowDetail} addToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        <Modal show={showModal} onHide={()=> setShowModal(false)}>
          <MovieDetail
            selectedMovie={selectedMovie}
            onAddToCart={addToCart}
          />
        </Modal>
      </Row>
    </Container>
  );
}

export default App;
