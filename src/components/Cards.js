import React from 'react';
import './Card.scss';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>SERVICIILE NOASTRE:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/electrician.jpg'
              text='Electricieni'
              label='3'
              path='/services'
            />
            <CardItem
              src='/images/plumber.jpg'
              text='Instalatori'
              label='4'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/designer.jpg'
              text='Amenajari interioare'
              label='2'
              path='/services'
            />
            <CardItem
              src='/images/furniture.png'
              text='Montaj Mobila'
              label='5'
              path='/products'
            />
            <CardItem
              src='/images/repair.jpg'
              text='Reparatii electrocasnice'
              label='2'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;