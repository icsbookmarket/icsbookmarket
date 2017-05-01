import { Template } from 'meteor/templating';
import { Books } from '../../api/book/BookCollection.js';

Template.Browse_Books_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
  bookList() {
    return Books.find({}, { sort: { course: 1 } });
  },
});

Template.Browse_Books_Page.onCreated(function onCreated() {
  this.subscribe('Books');
});
