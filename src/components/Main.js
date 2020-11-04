import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <main class="main__cards">
        <include src="./cards-preview.html"></include>
        <form class="form">
          <include src="./cards-design.html"></include>
          <include src="./cards-fill.html"></include>
          <include src="./cards-share.html"></include>
        </form>
      </main>
    );
  }
}

export default Main;
