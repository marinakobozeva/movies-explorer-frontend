import React from 'react';

import { useHistory } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  const history = useHistory();

  const goBackHandler = () => history.goBack();

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button onClick={goBackHandler}className="not-found__button" >Назад</button>
    </div>
  );
}

export default NotFound;