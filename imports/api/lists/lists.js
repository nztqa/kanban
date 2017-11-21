import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';

const Lists = new Mongo.Collection('lists');
export default Lists;

Lists.allow({
  insert: () => false,
  update: () => false,
  remode: () => false,
});

Lists.deny({
  insert: () => true,
  update: () => true,
  remode: () => true,
});

const Schema = {};
Schema.Lists = new SimpleSchema({
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

Lists.attachSchema(Schema.Lists);

Factory.define('list', Lists, {
  title: () => 'Factory Title',
  createdAt: () => new Date(),
  updatedAt: () => new Date(),
});
