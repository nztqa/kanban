import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from './BaseComponent.js';

class ListItem extends BaseComponent {
  constructor(props) {
    super(props);
    const { list } = this.props;
    this.state = {
      textAreaValue: list.title,
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
    if (this.state.textAreaValue !== nextProps.list.title) {
      this.setState({
        textAreaValue: nextProps.list.title,
      });
    }
  }

  render() {
    const { textAreaValue } = this.state;
    return (
      <div className="List-item">
        <textarea
          className="textarea"
          value={textAreaValue}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ListItem.propTypes = {
  list: PropTypes.object.isRequired,
};

export default ListItem;
