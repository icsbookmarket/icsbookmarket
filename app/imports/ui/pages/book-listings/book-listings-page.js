import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Books } from '/imports/api/book/BookCollection';
import { BookForSale } from '/imports/api/book/BookForSaleCollection';

const selectedBookKey = 'selectedBook';

Template.Book_Listings_Page.onCreated(function onCreated() {
  this.subscribe(Books.getPublicationName());
  this.subscribe(BookForSale.getPublicationName());
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(selectedBookKey, undefined);
});

Template.Book_Listings_Page.helpers({
  books() {
    // Initialize selectedInterests to all of them if messageFlags is undefined.
    if (!Template.instance().messageFlags.get(selectedBookKey)) {
      Template.instance().messageFlags.set(selectedBookKey, _.map(Books.findAll(), book => book.title));
    }
    // Find all profiles with the currently selected interests.
    const allListings = BookForSale.findAll();
    const selectedBook = Template.instance().messageFlags.get(selectedBookKey);
    return _.filter(allListings, listing => _.intersection(listing.titleOfSale, selectedBook).length > 0);
  },

  listing() {
    return _.map(BookForSale.findAll(),
        function makeListingObject(listing) {
          return {
            label: listing.titleOfSale,
            selected: _.contains(Template.instance().messageFlags.get(selectedBookKey), listing.titleOfSale),
          };
        });
  },
});

Template.Book_Listings_Page.events({
  'click .book-selection'(event, instance) {
    event.preventDefault();
    const selectedBook = _.filter(event.onClick.Books.title, (option) => option.selected);
    instance.messageFlags.set(selectedBookKey, _.map(selectedBook, (option) => option.value));
  },
});