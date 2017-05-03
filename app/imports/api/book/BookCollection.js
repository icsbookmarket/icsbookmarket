import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';

class BookCollection extends BaseCollection {

  /**
   * Creates the Profile collection.
   */
  constructor() {
    super('Book', new SimpleSchema({
      image: { type: SimpleSchema.RegEx.Url, optional: false, label: 'image' },
      title: { type: String, optional: false, label: 'title' },
      author: { type: String, optional: false, label: 'author' },
      course: { type: String, optional: false, label: 'course' },
    }));
  }

  /**
   * Defines a new book.
   * @example
   * Profiles.define({ image: 'Philip',
   *                   title: 'Johnson',
   *                   author: 'johnson',
   *                   course:
    *                   });
   * @param { Object } description Object with required key username.
   * Remaining keys are optional.
   * Username must be unique for all users. It should be the UH email account.
   * Interests is an array of defined interest names.
   * @throws { Meteor.Error } If a user with the supplied username already exists, or
   * if one or more interests are not defined, or if github, facebook, and instagram are not URLs.
   * @returns The newly created docID.
   */
  define({ image, title, author, course }) {
    // make sure required fields are OK.
    const checkPattern = { image: String, title: String, author: String, course: String };
    check({ image, title, author, course }, checkPattern);

    if (this.find({ title }).count() > 0) {
      throw new Meteor.Error(`${title} is previously defined in another Profile`);
    }

    // Throw an error if any of the passed book names are not defined.
    return this._collection.insert({ image, title, author, course });
  }

  /**
   * Returns an object representing the Profile docID in a format acceptable to define().
   * @param docID The docID of a Profile.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const image = doc.image;
    const title = doc.title;
    const author = doc.author;
    const course = doc.course;
    return { image, title, author, course };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Books = new BookCollection();
