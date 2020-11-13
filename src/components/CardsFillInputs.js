import React from 'react';
class CardsFillInputs extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     text: '',
    //     };
    this.handlerChangeInputs = this.handlerChangeInputs.bind(this);
  }

  handlerChangeInputs(ev) {
    console.log(ev.target.value);
  }

  render() {
    return (
      <>
        <div>
          <label className="element-form" htmlFor={this.props.name}>
            {this.props.title}
            <input
              className="element-form form-input js-inputName js-input"
              name={this.props.name}
              id={this.props.id}
              type="text"
              placeholder={this.props.placeholder}
              onChange={this.handlerChangeInputs}
            />
          </label>
        </div>
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
            <button type="button" className="button--file js__profile-trigger">
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
      </>
    );
  }
}
export default CardsFillInputs;
