import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Books } from '/imports/api/book/BookCollection.js';
import { BookForSale } from '/imports/api/bookforsale/BookForSaleCollection.js';

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
  this.context = BookForSale.getSchema().namedContext('Sell_Books_Page');
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
    const bookDataTitles = Books.find().fetch();
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
    const firstNameOfSeller = event.target.First.value;
    const lastNameOfSeller = event.target.Last.value;
    const titleOfSale = event.target.Titles.value;
    const condition = event.target.Condition.value;
    const price = event.target.Price.value;
    const description = event.target.Description.value;
    console.log(instance);
    // console.log($("#name",$(event.target)).value);
    console.log('Below here is log of title');
    console.log(titleOfSale);
    console.log(event.target);
    console.log('Can you see me?');
    console.log(`price: ${price}, condition: ${condition}, description: ${description}`);
    console.log(`lastName: ${lastNameOfSeller}, firstName: ${firstNameOfSeller}`);
    console.log(`username ${username}, titleofSale ${titleOfSale}`);
    const newSaleData = { username, firstNameOfSeller, lastNameOfSeller, titleOfSale, condition, price, description };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    BookForSale.getSchema().clean(newSaleData);
    console.log(newSaleData);
    // Determine validity.
    instance.context.validate(newSaleData);
    if (instance.context.isValid()) {
      console.log('What is here vv');
      console.log(newSaleData);
      BookForSale.define(newSaleData);
      instance.messageFlags.set(displayErrorMessages, false);
      console.log('Is the error after me?');
      // instance.$('.dropdown').dropdown('restore defaults');
      const user = Meteor.user().profile.name;
      FlowRouter.go(`/${user}/your`);
    } else {
      console.log('What is here else');
      console.log(newSaleData);
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});
