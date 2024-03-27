import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import './UsersItem.css';
import Avatar from '../../shared/components/UIElements/Avatar';
import { Link } from 'react-router-dom';
const PlaceItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
      <Link to={`/place/${props.id}`}>
      <div className="user-item__image">
          <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.name} />
            </div>
          <div className="user-item__info">
            <h4>{props.title}</h4>
          </div>
      </Link>
      </Card>
    </li>
  );
};

export default PlaceItem;
