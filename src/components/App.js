import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//Create props to pass to Preview
const fillProps = {
  name: '',
  job: '',
  profileImage: './images/lisa_simpson.png',
  email: '',
  phone: '',
  linkedin: '',
  github: ''
};

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main data={fillProps}></Main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
