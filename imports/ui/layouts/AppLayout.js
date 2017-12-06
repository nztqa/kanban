import React from 'react';
import PropTypes from 'prop-types';
// import Header from '../components/Header';
import BoardList from '../components/BoardList.js';
import Loading from '../components/Loading.js';

class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { boards } = this.props;
    console.log(`New board ${boards.length + 1}`);
  }

  render() {
    const { boards, loading } = this.props;
    if (loading) {
      return <Loading key="loading" />;
    }
    return (
      <div className="container">
        <button className="add-button" onClick={this.onClick}>Add</button>
        <BoardList
          boards={boards}
        />
      </div>
    );
  }
}

AppLayout.propTypes = {
  boards: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default AppLayout;
