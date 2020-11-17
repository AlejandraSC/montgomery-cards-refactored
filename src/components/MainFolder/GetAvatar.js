import React, { Component } from 'react';
import './GetAvatar.scss';
import PropTypes from 'prop-types';
import '../AppFolder/CardsFolder/CardsFill.scss';

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar('profileImage', image);

    /*this.props.handleChange();*/
  }

  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    const { isAvatarDefault, avatar } = this.props;
    return (
      <div>
        <label className="element-form">Imagen de perfil</label>
        <input
          type="file"
          ref={this.myFileField}
          className="element-form form-input form-file"
          onChange={this.uploadImage}
        />
        <div className="button--wrapper">
          <button
            className="button--file"
            type="button"
            onClick={this.handleFilePicker}
          >
            Añadir Imagen
          </button>

          <div
            className="image--profile-preview"
            style={this.getPreview(isAvatarDefault, avatar)}
          ></div>
        </div>
      </div>
    );
  }
}

GetAvatar.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired
};

export default GetAvatar;
