import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Bookdata = new Mongo.Collection('Bookdata');

/**
 * Create the schema for Book Data
 */
export const BookdataSchema = new SimpleSchema({
  image: {
    label: 'image',
    type: String,
    optional: false,
  },
  title: {
    label: 'title',
    type: String,
    optional: false,
    max: 200,
  },
  author: {
    label: 'author',
    type: String,
    optional: false,
    max: 200,
  },
  course: {
    label: 'course',
    type: String,
    optional: false,
    max: 200,
  },
});

BookdataSchema.messages({

});

Bookdata.attachSchema(BookdataSchema);

