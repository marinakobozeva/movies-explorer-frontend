class MainApi {
  constructor(options) {
    this.options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  signUp(name, email, password) {
    return fetch(`${this.options.baseUrl}/signup`, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify({
        name,
        email,
        password
        }),
    }).then(this._checkResponse);
  }

  signIn(email, password) {
    return fetch(`${this.options.baseUrl}/signin`, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify({
        email,
        password
      }),
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...this.options.headers,
      },
    })
    .then(this._checkResponse);
  }

  changeUserInfo(name, email) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...this.options.headers,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
    .then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this.options.baseUrl}/movies`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...this.options.headers,
      },
    })
    .then(this._checkResponse);
  }

  saveMovie(movie) {
    return fetch(`${this.options.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...this.options.headers,
      },
      body: JSON.stringify({
        country: movie.country,
        description: movie.description || 'Без описания',
        director: movie.director,
        duration: movie.duration,
        movieId: movie.id,
        image: movie.poster,
        nameRU: movie.nameRU || 'Без имени',
        nameEN: movie.nameEN || 'No name',
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        year: movie.year,
      }),
    })
    .then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this.options.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...this.options.headers,
      },
    })
    .then(this._checkResponse);
  }
}

const { REACT_APP_NODE_ENV, REACT_APP_API_URL } = process.env;

export default new MainApi({
  baseUrl: REACT_APP_NODE_ENV === 'production' ? REACT_APP_API_URL : 'http://localhost:3001',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
