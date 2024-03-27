import "./SearchResult.css";
import { Link } from 'react-router-dom';
import Card from "../UIElements/Card";
import Avatar from "../UIElements/Avatar";

const SearchResult = props => {
  return (
    <Card className="user-item__content">
      <Link style={{ textDecoration: 'none' }} to={`/place/${props.result.id}`}>
          <div className="user-item__info" onClick={props.onClear}>
            <h3>{props.result.title}</h3>
          </div>
      </Link>
    </Card>
  );
};

export default SearchResult;