import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Boards from '../../api/boards/boards.js';
import BoardPage from '../pages/BoardPage.js';

const BoardPageContainer = withTracker(({ match }) => {
  const listsHandle = Meteor.subscribe('lists.inBoard', { boardId: match.params.id });
  const loading = !listsHandle.ready();
  const board = Boards.findOne(match.params.id);
  const boardExists = !loading && !!board;
  return {
    loading,
    board,
    boardExists,
    lists: boardExists ? board.lists().fetch() : [],
  };
})(BoardPage);

export default BoardPageContainer;
