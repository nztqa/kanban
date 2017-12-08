import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { publishComposite } from 'meteor/reywood:publish-composite';
import Lists from '../lists.js';
import Boards from '../../boards/boards.js';

Meteor.publish('lists.all', () => Lists.find());

publishComposite('lists.inBoard', (params) => {
  new SimpleSchema({
    boardId: { type: String },
  }).validate(params);

  const { boardId } = params;

  return {
    find() {
      const query = {
        _id: boardId,
      };

      // We only need the _id field in this query, since it's only
      // used to drive the child queries to get the lists
      const options = {
        fields: { _id: 1 },
      };

      return Boards.find(query, options);
    },

    children: [{
      find(board) {
        return Lists.find({ boardId: board._id }, { fields: Lists.title });
      },
    }],
  };
});
