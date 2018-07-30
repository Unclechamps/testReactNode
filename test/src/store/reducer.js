import * as actionTypes from './actionTypes'


const initialState = {
    movieList : [],
    cartList : [],
    total : 0
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        ...state
      }
    case actionTypes.DELETE_MOVIE:
      return {
        ...state
      }
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartList : state.cartList.concat(action.movie),
        total : state.total += parseInt(action.movie.price)
      }
    case actionTypes.DELETE_CART_MOVIE:
      return {
        ...state,
        cartList : state.cartList.filter(movie => movie !== action.movie),
        total : state.total -= parseInt(action.movie.price)
      }

    case actionTypes.LIST_MOVIE:
      return {
            ...state,
            movieList : action.movies
      }
    }

  return state

}



export default reducer
