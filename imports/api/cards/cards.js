import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';

const Cards = new Mongo.Collection('cards');
export default Cards;

Cards.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Cards.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
});

const Schema = {};
Schema.Cards = new SimpleSchema({
  title: {
    type: String,
  },
  listId: {
    type: String,
  },
  createdAt: {
    type: Date,
    autoValue() { // eslint-disable-line consistent-return
      if (this.isInsert) {
        return new Date();
      }
    },
  },
});

Cards.attachSchema(Schema.Cards);

Factory.define('card', Cards, {
  title: () => 'Factory Title',
  createdAt: () => new Date(),
});
