
import * as actionTypes from './actionTypes'

export const addMovie = (movie) => {
  return {
    type: actionTypes.ADD_MOVIE,
    movie : movie
  }
}

export const deleteMovie = (movie) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    movie : movie
  }
}

export const addToCart = (movie) => {
  return {
    type: actionTypes.ADD_TO_CART,
    movie : movie
  }
}

export const deleteCartMovie = (movie) => {
  return {
    type: actionTypes.DELETE_CART_MOVIE,
    movie : movie
  }
}

export const onPopulateListUsingThunk = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/movies')
    .then(response => response.json())
    .then((json) => {
      console.log(json);
      dispatch({type : actionTypes.LIST_MOVIE, movies : json});
    })
  }
}

export const onAddMovieUsingThunk = (movie) => {
  return (dispatch) => {
    fetch('http://localhost:3001/add-movie', {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(response => response.json())
    .then((json) => {
      console.log(json)
      dispatch({type : actionTypes.ADD_MOVIE, movie : json})
    })
  }
}

export const onDeleteMovieUsingThunk = (movie) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/movies/${movie.id}`, {
      method : 'DELETE',
    })
    .then(response => response.json())
    .then((json) => {
      dispatch(onPopulateListUsingThunk())
    })
  }
}
