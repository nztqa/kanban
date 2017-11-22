import { Meteor } from 'meteor/meteor';
import Boards from '../../api/boards/boards.js';
import Cards from '../../api/cards/cards.js';
import Lists from '../../api/lists/lists.js';

Meteor.startup(() => {
  if (Meteor.isDevelopment) {
    if (Boards.find().count() === 0) {
      const data = [
        { title: 'Board 1' },
        { title: 'Board 2' },
        { title: 'Board 3' },
      ];
      data.forEach(board => Boards.insert(board));
    }
    if (Cards.find().count() === 0) {
      const data = [
        { title: 'Card 1' },
        { title: 'Card 2' },
        { title: 'Card 3' },
      ];
      data.forEach(card => Cards.insert(card));
    }
    if (Lists.find().count() === 0) {
      const data = [
        { title: 'List 1' },
        { title: 'List 2' },
        { title: 'List 3' },
      ];
      data.forEach(list => Lists.insert(list));
    }
  }
});
