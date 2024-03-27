import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import SingleItem from './SingleItem';
import Button from '../../shared/components/FormElements/Button';
import './PlaceList.css';

const SinglePlace = props => {
  return (
    <ul className="place-list"> 
        <SingleItem
          key={props.items.id}
          id={props.items.id}
          image={props.items.image}
          title={props.items.title}
          description={props.items.description}
          address={props.items.address}
          creatorId={props.items.creator}
          coordinates={props.items.location}
          onDelete={props.onDeletePlace}
        />
    </ul>
  );
};

export default SinglePlace;
