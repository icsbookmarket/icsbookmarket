import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Books } from '/imports/api/book/BookCollection.js';
import { BookForSale } from '/imports/api/bookforsale/BookForSaleCollection.js';

Template.Your_Books_Page.onCreated(function onCreated() {
  this.subscribe(BookForSale.getPublicationName());
});

Template.Your_Books_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
  yourbooks() {
    const userName = Meteor.user().profile.name;
    return BookForSale.find({ username: userName });
  },
});


Template.Your_Books_Page.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});

/*Template.Your_Books_Page.events({
  'click.delete'(event) {
    event.preventDefault();
    console.log(BookForSale);
    console.log(FlowRouter.getParam('_id'));
    BookForSale.removeIt(FlowRouter.getParam('_id'));
    const user = Meteor.user().profile.name;
    FlowRouter.go(`/${user}/your`);
  },
});
*/
