import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'meteor/universe:i18n';
import BaseComponent from '../components/BaseComponent.js';
import ListItem from '../components/ListItem.js';
import NotFoundPage from '../pages/NotFoundPage.js';

class BoardPage extends BaseComponent {
  render() {
    const { boardExists, loading, lists } = this.props;

    if (!boardExists) {
      return <NotFoundPage />;
    }

    let Lists;
    if (!lists || !lists.length) {
      Lists = (
        <p>
          {i18n.__('pages.listPage.noCards')}
        </p>
      );
    } else {
      Lists = lists.map(list => (
        <ListItem
          key={list._id}
          list={list}
        />
      ));
    }

    return (
      <div className="page lists-show">
        <div className="content-scrollable list-items">
          {loading
            ? <p>{i18n.__('components.loading.loading')}</p>
            : Lists}
        </div>
      </div>
    );
  }
}

BoardPage.propTypes = {
  board: PropTypes.object,
  lists: PropTypes.array,
  loading: PropTypes.bool,
  boardExists: PropTypes.bool,
};

export default BoardPage;
