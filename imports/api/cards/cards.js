import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';

const Cards = new Mongo.Collection('cards');
export default Cards;

Cards.allow({
  insert: () => false,
  update: () => false,
  remode: () => false,
});

Cards.deny({
  insert: () => true,
  update: () => true,
  remode: () => true,
});

const Schema = {};
Schema.Cards = new SimpleSchema({
  title: {
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
