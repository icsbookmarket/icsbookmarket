import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
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

  define({ username, firstNameOfSeller, lastNameOfSeller, titleOfSale, condition, price, description }) {
    const checkPattern = {
      username: String, firstNameOfSeller: String, lastNameOfSeller: String, titleOfSale: String, condition: String,
      price: String, description: String,
    };
    check({ username, firstNameOfSeller, lastNameOfSeller, titleOfSale, condition, price, description }, checkPattern);
    return this._collection.insert({
      username,
      firstNameOfSeller,
      lastNameOfSeller,
      titleOfSale,
      condition,
      price,
      description,
    });
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const username = doc.username;
    const firstNameOfSeller = doc.firstNameOfSeller;
    const lastNameOfSeller = doc.lastNameOfSeller;
    const titleOfSale = doc.titleOfSale;
    const condition = doc.condition;
    const price = doc.price;
    const description = doc.description;
    return { username, firstNameOfSeller, lastNameOfSeller, titleOfSale, condition, price, description };
  }
}

export const BookForSale = new BookForSaleCollection();
