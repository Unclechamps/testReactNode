
import React, {Component} from 'react'
import '../index.css'
import { connect } from 'react-redux'

import * as actionCreators from '../store/actionCreators'

class AddMovie extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movie: {}
    }

  }


  handleTextChange = (e) => {
    this.setState({
      movie : {
        ...this.state.movie,
        [e.target.name] : e.target.value
      }
    })

  }

render() {
  return (
    <div>
    <h1>Add Movies</h1>
    <div className = "addMovieForm">
    <div>
      <label>Movie Name: </label>
      <input type="text" id="title" onChange={this.handleTextChange} name="title" placeholder="Movie name"/>
    </div>
    <div>
      <label>Poster URL: </label>
      <input type="text" id="imageURL"  onChange={this.handleTextChange} name="imageURL" placeholder="link to the image" />
    </div>
    <div>
      <label>Price: </label>
      <input type="text" id="price"  onChange={this.handleTextChange} name="price" placeholder="price of movie" />
    </div>
      <button onClick={() => this.props.onAddMovie(this.state.movie)}>Add Movie</button>
    </div>
    </div>
    );
  }
}

// map state to properties
const mapStateToProps = (state) => {
  return {
    detail : state.movieList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddMovie : (movie) => dispatch(actionCreators.addMovie(movie)),
    onAddMovie : (movie) => dispatch(actionCreators.onAddMovieUsingThunk(movie))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie)

// what connect is doing is that whatever you send global state, is able to being used in the local properties. this.props.movies => local state
