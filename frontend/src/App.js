import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { Search } from './components/Search';
import { fetchImage } from './api';
import ImageCard from './components/ImageCard/ImageCard';
import { ImageCardContainerStyle } from './style';

function App() {
  const [formValues, setFormValues] = useState({
    searchInput: '',
  });

  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetchImage(formValues.searchInput);
    res && setImages((prev) => [...prev, res]);
    setFormValues((prev) => ({ ...prev, searchInput: '' }));
  };

  const handleDeleteImage = (image) => () => {
    setImages(images.filter((i) => i.id !== image.id));
  };

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Header title="Images Gallery" />
      <Search
        handleSubmit={handleSubmit}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <Container style={ImageCardContainerStyle} fluid="true" className="m-4">
        {images.length ? (
          <Row className="justify-content-start" xl={4} lg={3} md={2} xs={1}>
            {images.map((image) => {
              return (
                <Col key={image.id} className="pb-3">
                  <ImageCard
                    image={image}
                    handleDeleteImage={handleDeleteImage}
                  />
                </Col>
              );
            })}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

export default App;
