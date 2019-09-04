import React from 'react';
import PropTypes from 'prop-types';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

const AddItem = ({onChange, addItem, item: {name, quantity, price}}) => {

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Название"
        value={name}
        name="name"
        onChange={onChange}
      />
      <FormControl
        placeholder="Количество"
        value={quantity}
        name="quantity"
        type="number"
        onChange={onChange}
      />
      <FormControl
        placeholder="Цена"
        value={price}
        name="price"
        type="number"
        onChange={onChange}
      />
      <InputGroup.Append>
        <Button onClick={addItem}>Добавить</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

AddItem.propTypes = {
  onChange: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default AddItem;
