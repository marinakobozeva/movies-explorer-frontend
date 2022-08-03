export const filterByQuery = (moviesArr, query, possibleFields) => {
  return moviesArr.filter((movieInfo) => {
    let found = false;
    possibleFields.forEach((field) => {
      if (movieInfo[field] && movieInfo[field].toLowerCase().includes(query.toLowerCase())) {
        found = true;
      }
    })
    return found;
  })
};

export const filterByTime = (moviesArr, onlyShorts) => {
  return moviesArr.filter((movieInfo) => {
    if (onlyShorts) {
      return movieInfo.duration <= 40;
    }
    return true;
  })
}

export const updateMoviesPoster = (movieArr, baseUrl) => {
  return movieArr.map(movieInfo => {
    if (movieInfo.movieId) {
      movieInfo['poster'] = movieInfo.thumbnail;
    } else {
      movieInfo['poster'] = `${baseUrl}${movieInfo.image.url}`;
      movieInfo['thumbnail'] = `${baseUrl}${movieInfo.image.formats.thumbnail.url}`
    }
    return movieInfo;
  })
}

export const parseMovieTime = (movieTime) => {
  const hours = Math.floor(movieTime / 60);
  const minutes = movieTime % 60;
  return `${hours}ч ${minutes}м`
}
