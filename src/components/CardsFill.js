import React from 'react';
import './CardsFill.scss';
import CardsFillInputs from './CardsFillInputs';

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
          <CardsFillInputs
            name={'name'}
            id={'name'}
            type={'text'}
            value={''}
            title={'Nombre completo'}
            placeholder={'Ej: Lisa Simpson'}
          />
          <CardsFillInputs
            name={'job'}
            id={'job'}
            type={'text'}
            value={''}
            title={'Puesto'}
            placeholder={'Ej: Saxophonist '}
            position={'position'}
          />
          <CardsFillInputs
            name={'photo'}
            id={'photo'}
            type={'file'}
            // value={''}
            title={'Imagen de perfil'}
            // placeholder={'Ej: Saxophonist '}
          />
          <CardsFillInputs
            name={'email'}
            id={'email'}
            type={'email'}
            value={''}
            title={'Email'}
            placeholder={'Ej: lisa-simpson@gmail.com'}
          />
          <CardsFillInputs
            name={'phone'}
            id={'phone'}
            type={'tel'}
            value={''}
            title={'Teléfono'}
            placeholder={'Ej: 555-55-55-55'}
          />
          <CardsFillInputs
            name={'linkedin'}
            id={'linkedin'}
            type={'text'}
            value={''}
            title={'Linkedin'}
            placeholder={'Ej: lisa.simpson'}
          />
          <CardsFillInputs
            name={'github'}
            id={'github'}
            type={'text'}
            value={''}
            title={'Github'}
            placeholder={'Ej: lisa-simpson'}
          />
        </div>
      </fieldset>
    );
  }
}

export default CardsFill;
