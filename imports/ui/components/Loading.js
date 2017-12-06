import React from 'react';
import i18n from 'meteor/universe:i18n';
import BaseComponent from './BaseComponent.js';

class Loading extends BaseComponent {
  render() {
    return (
      <div className="loading">{i18n.__('components.loading.loading')}</div>
    );
  }
}

export default Loading;
