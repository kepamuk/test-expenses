import React from 'react';
import PropTypes from 'prop-types';
import {Card, Col} from 'react-bootstrap';

const NewsItem = ({news: {title, text, image}}) => {

  return (
    <Col sm={4}>
      <Card>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
