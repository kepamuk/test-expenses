import React, {useState} from 'react';
import {Row} from 'react-bootstrap';
import NewsItem from '../newsComponents/NewsItem';

const newsData = [
  {
    id: 'f4a7238b-8055-4ed1-b977-a319dacb573a',
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: '9493166b-9964-4b15-8034-1e8bceabde96',
    title: 'Card Title1',
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 'c1a0c807-6dc9-47fe-915a-001ed6b88970',
    title: 'Card Title2',
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    image: 'https://via.placeholder.com/150'
  }
];

const News = () => {
  const [news] = useState(newsData);

  return (
    <Row>
      {news.map(news => (
        <NewsItem key={news.id} news={news}/>
      ))}
    </Row>
  );
};

export default News;
