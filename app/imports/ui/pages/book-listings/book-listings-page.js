import { Template } from 'meteor/templating';
import { Books } from '/imports/api/book/BookForSaleCollection.js';

Template.Book_Listings_Page.onCreated(function onCreated() {
  this.subscribe(Books.getPublicationName());
});

Template.Book_Listings_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
  books() {
    return Books.find({}, { sort: { course: 1 } });
  },
});




