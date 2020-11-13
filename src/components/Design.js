import React from 'react';
import './Design.scss';

class Design extends React.Component {
  render() {
    return (
      <fieldset className="fieldset form-design">
        <div className="section__design--collapsable uppercase">
          <h3 className="section__design--title bold">
            <i
              className="fa fa-object-ungroup form--icons"
              aria-hidden="true"
            ></i>
            Diseña
          </h3>
          <a className="button--collapsable js-designCollapsable">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </a>
        </div>
        <div className="form--design-colors js-designContainer hidden">
          <h4 className="uppercase section__design--subtitle">Colores</h4>
          <div className="form--design-palets">
            <div className="palets--radio-1">
              <label for="design-1">
                <input
                  className="js-design-1"
                  id="design-1"
                  type="radio"
                  value="design-1"
                  name="design"
                  checked
                />
              </label>
            </div>
            <div className="palets--radio-2">
              <label for="design-2">
                <input
                  className="js-design-2"
                  id="design-2"
                  type="radio"
                  value="design-2"
                  name="design"
                />
              </label>
            </div>
            <div className="palets--radio-3">
              <label for="design-3">
                <input
                  className="js-design-3"
                  id="design-3"
                  type="radio"
                  value="design-3"
                  name="design"
                />
              </label>
            </div>
            <div className="palets palets--color-1"></div>
            <div className="palets palets--color-2"></div>
            <div className="palets palets--color-3"></div>
            <div className="palets palets--color-4"></div>
            <div className="palets palets--color-5"></div>
            <div className="palets palets--color-6"></div>
            <div className="palets palets--color-7"></div>
            <div className="palets palets--color-8"></div>
            <div className="palets palets--color-9"></div>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Design;
