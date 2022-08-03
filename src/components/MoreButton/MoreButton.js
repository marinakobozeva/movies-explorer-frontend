import React from 'react';

import './MoreButton.css';

function MoreButton(props) {
  const haveNext = props.haveNext;
  const onMoreClick = props.onMoreClick;

  const handleClick = (event) => {
    event.preventDefault();
    onMoreClick();
  }

  return (
    <button className={ haveNext ? 'more-btn' : 'more-btn_type_hidden'} type='submit' onClick={handleClick}>Ещё</button>
  )
}

export default MoreButton;

