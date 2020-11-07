import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//Create props to pass to Preview
const props = {
  name: 'MariCarmen',
  job: 'Queen of React Kingdom'
};

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main data={props}></Main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
