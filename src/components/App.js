import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//Create props to pass to Preview
const props = {
  name: 'MariCarmen',
  job: 'Queen of React Kingdom',
  github:
    'https://github.com/Adalab/materiales-front-end-k/find/e2600b0c54e9dc4ddab108df8160cee49f91255f'
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
