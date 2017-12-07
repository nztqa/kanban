import React from 'react';
import i18n from 'meteor/universe:i18n';
import BaseComponent from '../components/BaseComponent.js';

class NotFoundPage extends BaseComponent {
  render() {
    return (
      <div>
        <p>{i18n.__('pages.notFoundPage.pageNotFound')}</p>
      </div>
    );
  }
}

export default NotFoundPage;
