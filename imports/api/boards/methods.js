import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Boards from './boards.js';

export const upsertBoard = new ValidatedMethod({
  name: 'boards.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
  }).validator(),
  run(board) {
    return Boards.upsert({ _id: board._id }, { $set: board });
  },
});

export const removeBoard = new ValidatedMethod({
  name: 'boards.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Boards.remove(_id);
  },
});
