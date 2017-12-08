import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BaseComponent from './BaseComponent.js';
import BoardItem from './BoardItem.js';

class BoardList extends BaseComponent {
  render() {
    const { boards } = this.props;
    return (
      <div className="board-list">
        {boards.map(board => (
          <Link
            to={`/b/${board._id}`}
            key={board._id}
            title={board.title}
          >
            <BoardItem
              key={board._id}
              board={board}
            />
          </Link>
        ))}
      </div>
    );
  }
}

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
