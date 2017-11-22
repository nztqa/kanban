import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Cards from './cards.js';

export const insert = new ValidatedMethod({
  name: 'cards.insert',
  validate: new SimpleSchema({
    title: { type: String },
  }).validator(),
  run({ title }) {
    return Cards.insert({ title });
  },
});

export const updateTitle = new ValidatedMethod({
  name: 'cards.updateTitle',
  validate: new SimpleSchema({
    _id: { type: String },
    title: { type: String },
  }).validator(),
  run({ _id, title }) {
    return Cards.update({ _id }, { $set: { title } });
  },
});

export const upsert = new ValidatedMethod({
  name: 'cards.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
  }).validator(),
  run(card) {
    return Cards.upsert({ _id: card._id }, { $set: card });
  },
});

export const remove = new ValidatedMethod({
  name: 'cards.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Cards.remove(_id);
  },
});
