import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Lists from './lists.js';

export const upsertList = new ValidatedMethod({
  name: 'lists.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
  }).validator(),
  run(list) {
    return Lists.upsert({ _id: list._id }, { $set: list });
  },
});

export const removeList = new ValidatedMethod({
  name: 'lists.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Lists.remove(_id);
  },
});
