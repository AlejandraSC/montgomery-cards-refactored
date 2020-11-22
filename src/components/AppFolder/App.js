import React from 'react';
import Header from '../HeaderFolder/Header';
import Main from '../MainFolder/Main';
import Footer from '../FooterFolder/Footer';

//Create props to pass to Preview
const fillProps = {
  name: 'Lisa Simpsons',
  job: 'Front-end developer',
  profileImage: '',
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
