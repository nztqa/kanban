import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from './BaseComponent.js';
import BoardItem from './BoardItem.js';

class BoardList extends BaseComponent {
  render() {
    const { boards } = this.props;
    return (
      <div className="board-list">
        {boards.map(board => (
          <BoardItem
            key={board._id}
            board={board}
          />
        ))}
      </div>
    );
  }
}

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
