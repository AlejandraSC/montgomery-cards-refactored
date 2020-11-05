import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import './App.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
