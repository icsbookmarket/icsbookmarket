import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { Books } from '/imports/api/book/BookCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

class BookForSaleCollection extends BaseCollection {

  constructor() {
    super('BookForSale', new SimpleSchema({
      username: { type: String, label: 'username' },
      firstNameOfSeller: { type: String, label: 'firstNameOfSeller' },
      lastNameOfSeller: { type: String, label: 'lastNameOfSeller' },
      titleOfSale: { type: String, label: 'titleOfSale' },
      condition: { type: String, label: 'condition' },
      price: { type: String, label: 'price' },
      description: { type: String, label: 'description' },
    }));
  }

  define({ username = '', firstName = '', lastName = '', title = '', condition = '', price = '', description = '' }) {
    const checkPattern = {
      username: String, firstName: String, lastName: String, title: String, condition: String,
      price: String, description: String,
    };
    check({ username, firstName, lastName, title, condition, price, description }, checkPattern);
    return this._collection.insert({ username, firstName, lastName, title, condition, price, description });
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

