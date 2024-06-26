import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';
import PlaceItem from './PlacesItem';

const PlacesList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          image={place.image}
        />
      ))}
    </ul>
  );
};

export default PlacesList;
