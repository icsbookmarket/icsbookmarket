import { Template } from 'meteor/templating';
import { Books } from '/imports/api/books/BooksCollection';

Template.Browse_Books.onCreated(function onCreated() {
  this.subscribe(Books.getPublicationName());
});

Template.Browse_Books.helpers({

  /**
   * Returns a cursor to profiles, sorted by last name.
   */
  profiles() {
    return Books.find({}, { sort: { course: 1 } });
  },
});
