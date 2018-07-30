import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../store/actionCreators'

class Cart extends Component {



  render() {

    let cartMovies = this.props.cart.map((movie, index) => {
      return (
        <div className='indMovie' key={index}>
          <h3 className='title'>{movie.title}</h3>
          <img className='poster' src={movie.imageURL} alt='' />
          <p className='price'>${movie.price}</p>
          <button onClick={() =>this.props.onDeleteCartMovie(movie)}>Delete Movie</button>
        </div>
      )
    })


    return (
      <div className='movieList'>
        <h1>Cart</h1>
        {cartMovies}
        <div className="cartTotal">
        Total Amount: ${this.props.total}
        </div>
      </div>
      );
    }
  }



    const mapStateToProps = (state) => {
      return {
        cart : state.cartList,
        total : state.total
      }
  }

    const mapDispatchToProps = (dispatch) => {
      return {
        onDeleteCartMovie : (movie) => dispatch(actionCreators.deleteCartMovie(movie))

      }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Cart)
