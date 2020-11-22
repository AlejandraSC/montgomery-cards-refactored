import React from 'react';
import './Preview.scss';

class Preview extends React.Component {
  render() {
    return (
      <section className="section__card">
        <div className="section__card--wrapper">
          <button type="button" className="uppercase button--reset">
            <i className="fa fa-trash" aria-hidden="true"></i>Reset
          </button>
          <article className="section__article">
            <div className="section__article--wrapper">
              <h2 className="section__article--title">
                {this.props.data.name}
              </h2>
              <h3 className="section__article--subtitle ">
                {this.props.data.job}
              </h3>
            </div>
            <div className="section__article--image ">
              {this.props.data.profileImage}
            </div>
            <nav className="section__article--icons">
              <ul className="icons__list">
                <li className="icons__list--item">
                  <a className="link " href="tel:">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="icons__list--item ">
                  <a className="link " href="mailto:">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="icons__list--item ">
                  <a className="link " href="https://" target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="icons__list--item ">
                  <a className="link" href="https://" target="_blank">
                    <i className="fa fa-github-alt" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </section>
    );
  }
}

export default Preview;
