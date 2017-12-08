import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import Lists from '../lists/lists.js';

const Boards = new Mongo.Collection('boards');
export default Boards;

Boards.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Boards.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
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

Boards.helpers({
  lists() {
    return Lists.find({ boardId: this._id }, { sort: { createdAt: -1 } });
  },
});
