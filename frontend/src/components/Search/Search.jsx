import React from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Search = ({ handleSubmit, formValues, setFormValues }) => {
  const handleSearchInput = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control
                  name="searchInput"
                  type="text"
                  value={formValues.searchInput}
                  onChange={handleSearchInput}
                  placeholder="Search for new image..."
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Search.propTypes = {
  handleSubmit: PropTypes.func,
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
};

export default Search;
