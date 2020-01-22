import React from 'react';
import { connect} from 'react-redux'
import Header from './components/header';
import Footer from './components/footer';
import Product from './components/products';
// import { increment, decrement } from './actions/products'


const App = (props) => {
  return (
    <div className="App">
      <Header/>
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