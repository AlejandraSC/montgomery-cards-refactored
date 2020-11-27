import React from 'react';
import './Share.scss';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickTwitter = this.handleClickTwitter.bind(this);

    this.state = {
      isOpen: false,
      isClose: false
    };
  }
  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleClickTwitter() {
    this.setState({
      isClose: !this.state.isClose
    });
  }
  render() {
    const tweet =
      'Las Montgomery Card Refactored me han ayudado a crear esta tarjeta';
    const openClassName = this.state.isOpen ? '' : 'hidden';
    const rotateArrow = this.state.isOpen ? 'rotate' : '';
    const closeClassName = this.props.data.apiSuccess ? '' : 'hidden';

    return (
      <fieldset className="fieldset section__share">
        <div className="section__share--collapsable uppercase">
          <h3 className="section__share--title bold">
            <i className="fa fa-share-alt form--icons" aria-hidden="true"></i>
            Comparte
          </h3>
          <a className={`button--collapsable ${rotateArrow}`}>
            <i
              className="fa fa-chevron-down"
              aria-hidden="true"
              onClick={this.handleClick}
            ></i>
          </a>
        </div>
        <section className={`section__link ${openClassName}`}>
          <article className="section__link--share hidden--border">
            <button
              type="button"
              className="button--create uppercase"
              onClick={this.handleClickTwitter}
              // onClick={this.props.sendRequest}
            >
              <i className="fa fa-id-card" aria-hidden="true"></i>
              Crear tarjeta
            </button>
          </article>
          <article className={`section__link--twitter ${closeClassName}`}>
            <h3 className="section__share--subtitle">
              La tarjeta ha sido creada
            </h3>
            <a
              href={this.props.data.apiCardUrl}
              className="link link--share"
              target="_blank"
            >
              {this.props.data.apiSuccess
                ? this.props.data.apiCardUrl
                : this.props.data.apiError}
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${tweet}&url=${this.props.data.apiCardUrl}`}
              className="button--share"
              target="_blank"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>Compartir en
              twitter
            </a>
          </article>
        </section>
      </fieldset>
    );
  }
}

export default Share;
