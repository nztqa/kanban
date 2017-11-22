import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Lists from './lists.js';

export const insert = new ValidatedMethod({
  name: 'lists.insert',
  validate: new SimpleSchema({
    title: { type: String },
  }).validator(),
  run({ title }) {
    return Lists.insert({ title });
  },
});

export const updateTitle = new ValidatedMethod({
  name: 'lists.updateTitle',
  validate: new SimpleSchema({
    _id: { type: String },
    title: { type: String },
  }).validator(),
  run({ _id, title }) {
    return Lists.update({ _id }, { $set: { title } });
  },
});

export const upsert = new ValidatedMethod({
  name: 'lists.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
  }).validator(),
  run(list) {
    return Lists.upsert({ _id: list._id }, { $set: list });
  },
});

export const remove = new ValidatedMethod({
  name: 'lists.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Lists.remove(_id);
  },
});
