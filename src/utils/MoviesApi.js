class MoviesApi {
  constructor(options) {
    this.options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  getMovies(query) {
    return fetch(`${this.options.baseUrl}/beatfilm-movies`, { headers: this.options.headers })
      .then(this._checkResponse)
  }
}

export default new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
})
