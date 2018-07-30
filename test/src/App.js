import React, { Component } from 'react';
import './index.css';
import {Menu} from './components/Menu'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movieList : [],
      cartList : []
    }
  }


  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

 /* this.props.children ---- in the index.js file we have created routes. Basically saying if we go to the 'root' route, and whatever is under the <App> component, it will become the children of the App Component. In this case, I have MovieList and AddMovie under App in the index.js file.*/

export default App;
