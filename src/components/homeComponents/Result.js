import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';

const Result = ({items}) => {
  const result = () => {
    let result = 0;
    items.map(e => {
      result += e.price * e.quantity;
      return e;
    });
    return result;
  };
  
  return (
    <Alert variant="primary">
      <span>Общая сумма:</span>
      <span>&nbsp;{result()}</span>
    </Alert>
  );
};

Result.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Result;
