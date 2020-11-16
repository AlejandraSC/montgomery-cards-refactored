import React from 'react';
import Header from '../HeaderFolder/Header';
import Main from '../MainFolder/Main';
import Footer from '../FooterFolder/Footer';

//Create props to pass to Preview

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      profileImage: '',
      email: '',
      phone: '',
      linkedin: '',
      github: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(inputValue, inputValueId) {
    this.setState({
      [inputValueId]: inputValue
    });
  }

  handleReset(inputValue, inputValueId) {
    this.setState({
      [inputValueId]: '',
      [inputValue]: ''
    });
  }

  render() {
    return (
      <>
        <Header></Header>
        <Main
          data={this.state}
          handleChange={this.handleChange}
          handleReset={this.handleReset}
        ></Main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
