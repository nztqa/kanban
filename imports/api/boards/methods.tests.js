/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Boards from './boards.js';
import { insert, updateTitle, remove } from './methods.js';

describe('Boards methods', () => {
  beforeEach(() => {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a board into the Boards collection', () => {
    insert.call({ title: 'test board' });
    const getBoard = Boards.findOne({ title: 'test board' });
    assert.equal(getBoard.title, 'test board');
  });

  it('updateTitle a board from the Boards collection', () => {
    const { _id } = Factory.create('board');
    updateTitle.call({ _id, title: 'test update board' });
    const getBoard = Boards.findOne(_id);
    assert.equal(getBoard.title, 'test update board');
  });

  it('removes a board from the Boards collection', () => {
    const { _id } = Factory.create('board');
    remove.call({ _id });
    const getBoard = Boards.findOne(_id);
    assert.equal(getBoard, undefined);
  });
});
