import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop2 = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('drawer-hook')
  );
};

export default Backdrop2;
