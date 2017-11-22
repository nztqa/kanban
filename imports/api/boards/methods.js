import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Boards from './boards.js';

export const insert = new ValidatedMethod({
  name: 'boards.insert',
  validate: new SimpleSchema({
    title: { type: String },
  }).validator(),
  run({ title }) {
    return Boards.insert({ title });
  },
});

export const updateTitle = new ValidatedMethod({
  name: 'boards.updateTitle',
  validate: new SimpleSchema({
    _id: { type: String },
    title: { type: String },
  }).validator(),
  run({ _id, title }) {
    return Boards.update({ _id }, { $set: { title } });
  },
});

export const upsert = new ValidatedMethod({
  name: 'boards.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
  }).validator(),
  run(board) {
    return Boards.upsert({ _id: board._id }, { $set: board });
  },
});

export const remove = new ValidatedMethod({
  name: 'boards.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Boards.remove(_id);
  },
});
