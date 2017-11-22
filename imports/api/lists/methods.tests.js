/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Lists from './lists.js';
import { insert, updateTitle, remove } from './methods.js';

describe('Lists methods', () => {
  beforeEach(() => {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a list into the Lists collection', () => {
    insert.call({ title: 'test list' });
    const getList = Lists.findOne({ title: 'test list' });
    assert.equal(getList.title, 'test list');
  });

  it('updateTitle a list from the Lists collection', () => {
    const { _id } = Factory.create('list');
    updateTitle.call({ _id, title: 'test update list' });
    const getList = Lists.findOne(_id);
    assert.equal(getList.title, 'test update list');
  });

  it('removes a list from the Lists collection', () => {
    const { _id } = Factory.create('list');
    remove.call({ _id });
    const getList = Lists.findOne(_id);
    assert.equal(getList, undefined);
  });
});
