import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';

const Boards = new Mongo.Collection('boards');
export default Boards;

Boards.allow({
  insert: () => false,
  update: () => false,
  remode: () => false,
});

Boards.deny({
  insert: () => true,
  update: () => true,
  remode: () => true,
});

const Schema = {};
Schema.Boards = new SimpleSchema({
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
  updatedAt: {
    type: Date,
    autoValue() { // eslint-disable-line consistent-return
      if (this.isUpdate || this.isInsert) {
        return new Date();
      }
    },
  },
});

Boards.attachSchema(Schema.Boards);

Factory.define('board', Boards, {
  title: () => 'Factory Title',
  createdAt: () => new Date(),
  updatedAt: () => new Date(),
});
