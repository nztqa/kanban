import { Meteor } from 'meteor/meteor';
import Cards from '../cards.js';

Meteor.publish('cards.all', () => Cards.find());
