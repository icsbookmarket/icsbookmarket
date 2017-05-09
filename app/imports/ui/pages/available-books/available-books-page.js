import { Template } from 'meteor/templating';
import { BookForSale } from '/imports/api/bookforsale/BookForSaleCollection.js';

Template.Available_Books_Page.onCreated(function onCreated() {
  this.subscribe(BookForSale.getPublicationName());
});

Template.Available_Books_Page.helpers({

  /**
   * @returns {*} All of the available books documents.
   */
  available() {
    return BookForSale.find();
  },
});
