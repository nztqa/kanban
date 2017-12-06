import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import AppLayout from '../layouts/AppLayout.js';
import Boards from '../../api/boards/boards.js';

export default withTracker(() => {
  const boardsHandle = Meteor.subscribe('boards.all');
  return {
    boards: Boards.find({}, { sort: { createdAt: -1 } }).fetch(),
    loading: !boardsHandle.ready(),
  };
})(AppLayout);
