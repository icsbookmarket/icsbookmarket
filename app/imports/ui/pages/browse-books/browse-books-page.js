import { Template } from 'meteor/templating';
import { Bookdata } from '/imports/api/bookdata/bookdata.js';

Template.Browse_Books_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
  bookdataList() {
    return Bookdata.find({}, { sort: { course: 1 } });
  },
});

Template.Browse_Books_Page.onCreated(function onCreated() {
  this.subscribe('Bookdata');
});


/*import { Template } from 'meteor/templating';
import { Books } from '/imports/api/book/BookCollection.js';

Template.Browse_Books_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
 /* books() {
    // console.log(Books.find({}, { sort: { course: 1 } }));
    return Books.find({}, { sort: { course: 1 } });
  },
});

Template.Browse_Books_Page.onCreated(function onCreated() {
  this.subscribe(Books.getPublicationName());
});

     */