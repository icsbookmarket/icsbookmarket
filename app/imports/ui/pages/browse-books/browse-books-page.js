import { Template } from 'meteor/templating';
import { Books } from '/imports/api/book/BookCollection.js';

Template.Browse_Books_Page.onCreated(function onCreated() {
  this.subscribe('Books');
});

Template.Browse_Books_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
  books() {
    return Books.find({}, { sort: { course: 1 } });
  },
});




