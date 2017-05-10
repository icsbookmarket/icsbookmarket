import { Template } from 'meteor/templating';
import { Books } from '/imports/api/book/BookCollection.js';
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.Browse_Books_Page.onCreated(function onCreated() {
  this.subscribe(Books.getPublicationName());
});

Template.Browse_Books_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
  books() {
    return Books.find({}, { sort: { course: 1 } });
  },

  routeUserName() {
    return FlowRouter.getParam('username');
  },
});




