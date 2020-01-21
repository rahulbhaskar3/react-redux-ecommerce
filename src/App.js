import React from 'react';
import { connect} from 'react-redux'
import Header from './components/header';
import Footer from './components/footer';
import Product from './components/products';


const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <p>{props.count}</p>
      <button onClick={props.increment}>+</button>
      <button  onClick={props.decrement}>-</button>
      <Product/>
      <Footer/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state
   };
  }
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);