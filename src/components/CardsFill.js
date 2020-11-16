import React from 'react';
import './CardsFill.scss';

class CardsFill extends React.Component {
  render() {
    return (
      <fieldset className="fieldset form--fill">
        <div className="section__fill--collapsable uppercase">
          <h3 className="section__fill--title" bold>
            <i className="fa fa-keyboard-o form--icons" aria-hidden="true"></i>
            Rellena
          </h3>
          <a className="button--collapsable js-fillCollapsable">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </a>
        </div>
        <div className="js-fillContainer aria-hidden hidden">
          <div>
            <label className="element-form" for="name">
              Nombre completo
              <input
                className="element-form form-input js-inputName js-input"
                id="name"
                type="text"
                placeholder="Ej: Lisa Simpson"
                name="name"
              />
            </label>
          </div>
          <div>
            <label className="element-form" for="position">
              Puesto
              <input
                className="element-form form-input js-inputPosition js-input"
                id="job"
                type="text"
                placeholder="Ej: Saxophonist "
                name="job"
              />
            </label>
          </div>
          <div>
            <label className="element-form" for="image">
              Imagen de perfil
              <input
                className="element-form form-input form-file js__profile-upload-btn js-input"
                id="photo"
                type="file"
                name="photo"
              />
            </label>
            <div className="button--wrapper">
              <button
                type="button"
                className="button--file js__profile-trigger"
              >
                Añadir imagen
              </button>
              <div className="js__profile-preview image--profile-preview"></div>
            </div>
          </div>
          <div>
            <label className="element-form" for="email">
              Email
              <input
                className="element-form form-input js-inputEmail js-input"
                id="email"
                type="email"
                placeholder="Ej: lisa-simpson@gmail.com"
                name="email"
              />
            </label>
          </div>
          <div>
            <label className="element-form" for="phone">
              Teléfono
              <input
                className="element-form form-input js-inputPhone js-input"
                id="phone"
                type="tel"
                placeholder="Ej: 555-55-55-55"
                name="phone"
              />
            </label>
          </div>
          <div>
            <label className="element-form" for="linkedin">
              Linkedin
              <input
                className="element-form form-input js-inputLinkedin js-input"
                id="linkedin"
                type="text"
                placeholder="Ej: lisa.simpson"
                name="linkedin"
              />
            </label>
          </div>
          <div>
            <label className="element-form" for="github">
              Github
              <input
                className="input-github element-form form-input js-inputGithub js-input"
                id="github"
                type="text"
                placeholder="Ej: lisa-simpson"
                name="github"
              />
            </label>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default CardsFill;
