import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/es/ListGroup';
import {Button, FormControl} from 'react-bootstrap';

const HomeItem = ({onDelete, onChangeQuantity, item: {id, name, quantity, price}}) => {
  return (
    <ListGroup.Item>
      <span>{name}</span>&nbsp;
      <span>{price} руб.</span>&nbsp;
      <FormControl
        placeholder="Количество"
        value={quantity}
        name="quantity"
        type="number"
        onChange={(e) => onChangeQuantity(e, id)}
      />&nbsp;
      <span>Сумма: {quantity * price} руб.</span>
      <Button onClick={() => onDelete(id)} variant="danger">Удалить</Button>
    </ListGroup.Item>
  );
};

HomeItem.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeQuantity: PropTypes.func.isRequired
};

export default HomeItem;
