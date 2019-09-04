import React, {useState} from 'react';
import {Col, ListGroup, Row} from 'react-bootstrap';
import uuid from 'uuid';

import HomeItem from '../homeComponents/HomeItem';
import AddItem from '../homeComponents/AddItem';
import './Home.css';
import Result from '../homeComponents/Result';

const itemsData = [
  {
    id: 'f4a7238b-8055-4ed1-b977-a319dacb573a',
    name: 'Сок',
    quantity: "2",
    price: "15"
  },
  {
    id: '9493166b-9964-4b15-8034-1e8bceabde96',
    name: 'Лимонад',
    quantity: "1",
    price: "10"
  },
  {
    id: 'c1a0c807-6dc9-47fe-915a-001ed6b88970',
    name: 'Бутерброд',
    quantity: "1",
    price: "12"
  },
  {
    id: 'eddf47ed-5ee7-42b2-bb69-65adf58ab72f',
    name: 'Шоколад',
    quantity: "1",
    price: "20"
  }
];

const Home = () => {
  const [items, setItems] = useState(itemsData);
  const [item, setItem] = useState({
    name: '',
    quantity: '',
    price: ''
  });

  const addItem = () => {
    setItems([...items, {id: uuid.v4(), ...item}]);
    setItem({
      name: '',
      quantity: '',
      price: ''
    });
  };

  const onChange = (e) => {
    setItem({...item, [e.target.name]: e.target.value})
  };

  const onDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const onChangeQuantity = (e, id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        item.quantity = e.target.value;
      }
      return item;
    }));
  };

  return (
    <Row>
      <Col sm={12}>
        <AddItem
          onChange={onChange}
          addItem={addItem}
          item={item}
        />
        <ListGroup>
          {items.map(e => (
            <HomeItem
              key={e.id}
              item={e}
              onChangeQuantity={onChangeQuantity}
              onDelete={onDelete}
            />
          ))}
        </ListGroup>
        <Result items={items} />
      </Col>
    </Row>
  );
};

export default Home;
