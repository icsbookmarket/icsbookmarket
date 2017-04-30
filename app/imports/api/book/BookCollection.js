import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';

class BookCollection extends BaseCollection {

  /**
   * Creates the Book Collection
   * Going to be similar to the Interests Collection
   */
  constructor() {
    super('Book', new SimpleSchema({
      image: { type: SimpleSchema.RegEx.Url, optional: false, label: 'image' },
      title: { type: String, optional: false, label: 'title' },
      author: { type: String, optional: false, label: 'author' },
      course: { type: String, optional: false, label: 'course' },
      posts: { type: [Object], optional: true, label: 'posts' },

    }));
  }
  define({ image = '', title = '', author = '', course = '', posts }) {
    const checkPattern = { image: String, title: String, author: String, course: String };
    check({ image, title, author, course }, checkPattern);
    if (this.find({ title }).count() > 0) {
      throw new Meteor.Error(`${title} is previously defined in another Book`);
    }
    return this._collection.insert({ image, title, author, course, posts });
  }

  findTitle(titleID) {
    this.assertDefined(titleID);
    return this.findDoc(titleID).title;
  }
  findTitles(titlesID) {
    return titlesID.map(titleID => this.findTitle(titleID));
  }
  assertTitle(title) {
    this.findDoc(title);
  }
  assertTitles(titles) {
    _.each(titles, title => this.assertTitle(title));
  }
  findID(title) {
    return (this.findDoc(title)._id);
  }
  findIDs(titles) {
    return (titles) ? titles.map((instance) => this.findID(instance)) : [];
  }
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const image = doc.image;
    const title = doc.title;
    const author = doc.author;
    const course = doc.course;
    return { image, title, author, course };
  }
}
export const Books = new BookCollection();
