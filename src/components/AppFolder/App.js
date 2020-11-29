import React from 'react';
import Header from '../HeaderFolder/Header';
import Main from '../MainFolder/Main';
import Footer from '../FooterFolder/Footer';
import Landing from '../Landing/Landing';

import { Route, Switch } from 'react-router-dom';

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
      github: '',
      design: '1',
      apiSuccess: false,
      apiCardUrl: '',
      apiError: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
  }

  handleChange(inputValue, inputValueId) {
    this.setState({
      [inputValueId]: inputValue
    });
  }

  handleReset() {
    this.setState({
      name: '',
      job: '',
      profileImage: '',
      email: '',
      phone: '',
      linkedin: '',
      github: ''
    });
  }

  handleChangeRadio(changeValue) {
    this.setState({
      design: changeValue
    });
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Landing />{' '}
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <Main
              data={this.state}
              handleChange={this.handleChange}
              handleReset={this.handleReset}
              handleChangeRadio={this.handleChangeRadio}
              sendRequest={this.sendRequest}
            ></Main>
          </Route>
        </Switch>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
