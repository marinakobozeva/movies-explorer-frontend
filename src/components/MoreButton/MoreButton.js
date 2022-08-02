import React from 'react';

import './MoreButton.css';

function MoreButton({ onClick }) {
  return (
    <button className='more-btn' type='submit' onClick={onClick}>Ещё</button>
  )
}

export default MoreButton;

