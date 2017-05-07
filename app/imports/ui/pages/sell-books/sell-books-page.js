import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Books } from '/imports/api/book/BookCollection.js';
import { BookForSales } from '/imports/api/bookforsale/BookForSaleCollection.js';

Template.Sell_Books_Page.helpers({
  books() {
    return Books.find();
  },
});

Template.Sell_Books_Page.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});

const displayErrorMessages = 'displayErrorMessages';

export const conditionList = ['Excellent', 'Great', 'Good', 'Fair', 'Poor'];

Template.Sell_Books_Page.onCreated(function onCreated() {
  this.subscribe(Books.getPublicationName());
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = BookForSales.getSchema().namedContext('Sell_Books_Page');
});

Template.Sell_Books_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
  conditions() {
    return _.map(conditionList, function makeLevelObject(level) {
      return { label: level };
    });
  },
  booktitles() {
    const bookDataTitles = Books.find();
    const l = [];
    _.map(bookDataTitles, function makeObjectTitle(book) {
      l.push({
        label: book.title, selected: false,
      });
    });
    return l;
  },
});

Template.Sell_Books_Page.events({
  'submit .sale-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    // Are these getting the right things? Especially Condition and Titles
    // const bookObject =
    // console.log('Below here is log of bookObject');
    // console.log(bookObject);
    // const bookArray = Object.values(bookObject);
    // console.log('Below here is log of bookArray');
    // console.log(bookArray);
    const username = FlowRouter.getParam('username');
    const firstName = event.target.First.Value;
    const lastName = event.target.Last.Value;
    const title = event.target.Titles.label;
    const condition = event.target.Condition.value;
    const price = event.target.Price.value;
    const description = event.target.Description.value;
    console.log('Below here is log of title');
    console.log(title);
    console.log('Can you see me?');
    console.log(`price: ${price}, condition: ${condition}, 
    description: ${description}, lastName: ${lastName}, firstName: ${firstName}, address ${username}, title ${title}`);

    const newSaleData = { username, firstName, lastName, title, condition, price, description };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    BookForSales.clean(newSaleData);
    console.log(newSaleData);
    // Determine validity.
    instance.context.validate(newSaleData);
    if (instance.context.isValid()) {
      console.log('What is here vv');
      console.log(newSaleData);
      Books.define(newSaleData);
      instance.messageFlags.set(displayErrorMessages, false);
      // instance.$('.dropdown').dropdown('restore defaults');
      const user = Meteor.user().profile.name;
      FlowRouter.go(`/${user}/browse`);
    } else {
      console.log('What is here else');
      console.log(newSaleData);
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});
