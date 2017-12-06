import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from './BaseComponent.js';

class BoardItem extends BaseComponent {
  constructor(props) {
    super(props);
    const { board } = this.props;
    this.state = {
      textAreaValue: board.title,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const title = event.target.value;
    this.setState({
      textAreaValue: title,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.textAreaValue !== nextProps.board.title) {
      this.setState({
        textAreaValue: nextProps.board.title,
      });
    }
  }

  render() {
    const { textAreaValue } = this.state;
    return (
      <div className="board-item">
        <textarea
          className="textarea"
          value={textAreaValue}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

BoardItem.propTypes = {
  board: PropTypes.object.isRequired,
};

export default BoardItem;
