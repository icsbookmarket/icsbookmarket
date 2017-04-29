import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { Books } from '/imports/api/book/BookCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
// 3import { Interests } from '/imports/api/interest/InterestCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

class BookForSaleCollection extends BaseCollection {

  constructor() {
    super('BookForSale', new SimpleSchema({
      username: { type: String },
      firstName: { type: String },
      lastName: { type: String },
      title: { type: String },
      condition: { type: String },
      price: { type: String },
      description: { type: String },
    }));
  }

  define({ username = '', firstName = '', lastName = '', title = '', condition = '', price = '', description = '' }) {
    const checkPattern = {
      username: String, firstName: String, lastName: String, title: String, condition: String,
      price: String, description: String
    };
    check({ username, firstName, lastName, title, condition, price, description }, checkPattern);

    Books.assertTitle(title);
    return this._collection.insert({ username, firstName, lastName, title, condition, price, description });
  }
  findTitle(titleID) {
    this.assertDefined(titleID);
    return this.findDoc(titleID).title;
  }
  findTitles(titleIDs) {
    return titleIDs.map(titleID => this.findTitle(titleID));
  }
  assertTitle(title) {
    this.findDoc(title);
  }
  assertTitles(titles) {
    _.each(titles, title => this.assertTitle(title));
  }
  findID(title) {
    return this.findDoc(title)._id;
  }
  findIDs(titles) {
    return (titles) ? titles.map((instance) => this.findID(instance)) : [];
  }
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const username = doc.username;
    const firstName = doc.firstName;
    const lastName = doc.lastName;
    const title = doc.title;
    const condition = doc.condition;
    const price = doc.price;
    const description = doc.description;
    return { username, firstName, lastName, title, condition, price, description };
  }
}

export const BookForSales = new BookForSaleCollection();

