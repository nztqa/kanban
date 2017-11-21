import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Cards from './cards.js';

export const upsertCard = new ValidatedMethod({
  name: 'cards.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
  }).validator(),
  run(card) {
    return Cards.upsert({ _id: card._id }, { $set: card });
  },
});

export const removeCard = new ValidatedMethod({
  name: 'cards.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Cards.remove(_id);
  },
});
