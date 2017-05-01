import { Template } from 'meteor/templating';
import { Books } from '/imports/api/books/BooksCollection';

Template.Browse_Books_Page.onCreated(function onCreated() {
  this.subscribe(Books.getPublicationName());
});

Template.Browse_Books_Page.helpers({

  /**
   * Returns a cursor to profiles, sorted by last name.
   */
  books() {
    return Books.find({}, { sort: { course: 1 } });
  },
});
