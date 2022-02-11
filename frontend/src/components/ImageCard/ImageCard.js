import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ImageCard = ({ image, handleDeleteImage }) => {
  const { alt_description, urls, description, links } = image;

  return (
    <Card>
      <Card.Img variant="top" src={urls.small} />
      <Card.Body>
        <Card.Title>
          {alt_description ? alt_description.toUpperCase() : 'Image title'}
        </Card.Title>
        <Card.Text>{description ? description : 'Image description'}</Card.Text>
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outline-danger"
            onClick={handleDeleteImage(image)}
            target="_blank"
          >
            Delete
          </Button>
          <Button variant="outline-info" href={links.download} target="_blank">
            Download
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object,
  handleDeleteImage: PropTypes.func,
};

export default ImageCard;
