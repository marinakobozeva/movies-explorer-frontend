export const filterByQuery = (moviesArr, query, possibleFields) => {
  return moviesArr.filter((movieInfo) => {
    let found = false;
    possibleFields.forEach((field) => {
      if (movieInfo[field] && movieInfo[field].includes(query)) {
        found = true;
      }
    })
    return found;
  })
};

export const updateMoviesPoster = (movieArr, baseUrl) => {
  return movieArr.map(movieInfo => {
    movieInfo['poster'] = `${baseUrl}/${movieInfo.image.url}`;
    return movieInfo;
  })
}

export const parseMovieTime = (movieTime) => {
  const hours = Math.floor(movieTime / 60);
  const minutes = movieTime % 60;
  return `${hours}ч ${minutes}м`
}
