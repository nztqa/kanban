/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Cards from './cards.js';
import { insert, updateTitle, remove } from './methods.js';

describe('Cards methods', () => {
  beforeEach(() => {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a card into the Cards collection', () => {
    insert.call({ title: 'test card' });
    const getCard = Cards.findOne({ title: 'test card' });
    assert.equal(getCard.title, 'test card');
  });

  it('updateTitle a card from the Cards collection', () => {
    const { _id } = Factory.create('card');
    updateTitle.call({ _id, title: 'test update card' });
    const getCard = Cards.findOne(_id);
    assert.equal(getCard.title, 'test update card');
  });

  it('removes a card from the Cards collection', () => {
    const { _id } = Factory.create('card');
    remove.call({ _id });
    const getCard = Cards.findOne(_id);
    assert.equal(getCard, undefined);
  });
});
