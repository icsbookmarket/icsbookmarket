import { Bookdata } from '/imports/api/bookdata/bookdata.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const bookdataSeeds = [
  {
    image: '/images/111.png',
    title: 'INTRODUCTION TO PROGRAMMING USING JAVA',
    author: 'ECK',
    course: 'ICS 111',
  },
  {
    image: '/images/141.png',
    title: 'DISCRETE MATHEMATICS AND ITS APPLICATION',
    author: 'ROSEN',
    course: 'ICS 141 / ICS 241',
  },
  {
    image: '/images/211.png',
    title: 'DATA STRUCTURES ABSTRACTIONS AND DESIGN USING JAVA',
    author: 'KOFFMAN',
    course: 'ICS 211',
  },
  {
    image: '/images/212.png',
    title: 'THE C PROGRAMMING LANGUAGE',
    author: 'KERNIGHAN / RITCHIE',
    course: 'ICS 212',
  },
  {
    image: '/images/212_2.png',
    title: 'THE C++ PROGRAMMING LANGUAGE',
    author: 'STROUSTRUP',
    course: 'ICS 212',
  },
  {
    image: '/images/311.png',
    title: 'INTRODUCTION TO ALGORITHM',
    author: 'CORMEN',
    course: 'ICS 311',
  },
  {
    image: '/images/312.png',
    title: 'PC ASSEMBLY LANGUAGE',
    author: 'CARTER',
    course: 'ICS 312',
  },
  {
    image: '/images/313.png',
    title: 'LAND OF LISP',
    author: 'BARSKI',
    course: 'ICS 313',
  },
  {
    image: '/images/313_2.png',
    title: 'PROGRAMMING LANGUAGE PRAGMATICS',
    author: 'SCOTT',
    course: 'ICS 313',
  },
  {
    image: '/images/321.png',
    title: 'DATABASE SYSTEMS: THE COMPLETE BOOK',
    author: 'GARCIA-MOLINA / ULLMAN / WIDOM',
    course: 'ICS 321',
  },
  {
    image: '/images/331.png',
    title: 'DIGITAL LOGIC DESIGN: A RIGOROUS APPROACH',
    author: 'EVEN / MEDINA',
    course: 'ICS 331',
  },
  {
    image: '/images/332.png',
    title: 'OPERATING SYSTEM CONCEPTS',
    author: 'SILBERSCHATZ / GALVIN / GAGNE',
    course: 'ICS 332',
  },
  {
    image: '/images/351.png',
    title: 'MASTERING NETWORKS INTERNET LAB MANUAL',
    author: 'LIEBEHERR',
    course: 'ICS 351',
  },
  {
    image: '/images/355.png',
    title: 'COMPUTER SECURITY',
    author: 'GOLLMANN',
    course: 'ICS 355',
  },
  {
    image: '/images/355_2.png',
    title: 'SECURITY ENGINEERING',
    author: 'ANDERSON',
    course: 'ICS 355',
  },
  {
    image: '/images/361.png',
    title: 'AI ALGORITHMS, DATA STRUCTURES, AND IDIOMS IN PROLOG, LISP, AND JAVA',
    author: 'LUGER / STUBBLEFIELD / WESLEY',
    course: 'ICS 361',
  },
  {
    image: '/images/361_2.png',
    title: 'ARTIFICIAL INTELLIGENCE: STRUCTURES AND STRATEGIES FOR COMPLEX PROBLEM SOLVING',
    author: 'LUGER / WESLEY',
    course: 'ICS 361',
  },
  {
    image: '/images/390.png',
    title: 'ETHICS FOR INFORMATION AGE',
    author: 'QUINN',
    course: 'ICS 390',
  },
  {
    image: '/images/419.png',
    title: 'DESIGN OF EVERYDAY THINGS',
    author: 'NORMAN',
    course: 'ICS 419',
  },
  {
    image: '/images/421.png',
    title: 'BIG DATA: PRINCIPLES AND BEST PRACTICES OF SCALABLE REAL-TIME DATA SYSTEMS',
    author: 'WARREN / MARZ',
    course: 'ICS 421',
  },
  {
    image: '/images/423.png',
    title: 'CRYPTOGRAPHY: THEORY AND PRACTICE',
    author: 'STINSON',
    course: 'ICS 423 / ICS 455',
  },
  {
    image: '/images/423_2.png',
    title: 'A CLASSICAL INTRODUCTION TO CRYPTOGRAPHY',
    author: 'VAUDENAY',
    course: 'ICS 423',
  },
  {
    image: '/images/423_3.png',
    title: 'COMPUTER SECURITY AND CRYPTOGRAPHY',
    author: 'KONHEIM',
    course: 'ICS 423',
  },
  {
    image: '/images/425.png',
    title: 'A GIFT OF FIRE: SOCIAL, LEGAL, AND ETHICAL ISSUES FOR COMPUTING TECHNOLOGY',
    author: 'BAASE',
    course: 'ICS 425',
  },
  {
    image: '/images/425-2.png',
    title: 'INTRODUCTION TO COMPUTER SECURITY',
    author: 'BISHOP',
    course: 'ICS 425',
  },
  {
    image: '/images/426.png',
    title: 'NFORMATION ASSURANCE AND SECURITY ETHICS IN COMPLEX SYSTEMS: INTERDISCIPLINARY PERSPECTIVES',
    author: 'DARK',
    course: 'ICS 426',
  },
  {
    image: '/images/426_2.png',
    title: '24 DEADLY SINS OF SOFTWARE SECURITY: PROGRAMMING FLAWS AND HOW TO FIX THEM',
    author: 'HOWARD / LEBLANC / VIEGA',
    course: 'ICS 426'
  },
  {
    image: '/images/431.png',
    title: 'COMPUTER ARCHITECTURE: COMPLEXITY AND CORRECTNESS',
    author: 'MUELLER / PAUL',
    course: 'ICS 431',
  },
  {
    image: '/images/441.png',
    title: 'INTRODUCTION TO AUTOMATA THEORY, LANGUAGES, AND COMPUTATION',
    author: 'HOPCROFT / ULLMAN / MOTWANI',
    course: 'ICS 441',
  },
  {
    image: '/images/442.png',
    title: 'DYNAMIC PROGRAMMING',
    author: 'LEW / MAUCH',
    course: 'ICS 442',
  },
  {
    image: '/images/443.png',
    title: 'INTRODUCTION TO PARALLEL ALGORITHMS',
    author: 'JAJA',
    course: 'ICS 443',
  },
  {
    image: '/images/451.png',
    title: 'COMPUTER NETWORKING: PRINCIPLES, PROTOCOLS, PRACTICE',
    author: 'BONAVENTURE',
    course: 'ICS 451',
  },
  {
    image: '/images/452.png',
    title: 'COMPUTATIONAL PRINCIPLES OF MOBILE ROBOTICS',
    author: 'DUDEK / JENKIN',
    course: 'ICS 452',
  },
  {
    image: '/images/455.png',
    title: 'NETWORK SECURITY',
    author: 'KAUFMAN / PERLMAN / SPECINER',
    course: 'ICS 455',
  },
  {
    image: '/images/464.png',
    title: 'INTERACTION DESIGN: BEYOND HUMAN-COMPUTER INTERACTION',
    author: 'SHARP / ROGERS / PREECE',
    course: 'ICS 464',
  },
  {
    image: '/images/469.png',
    title: 'COGNITIVE SCIENCE',
    author: 'FRIEDENBURG',
    course: 'ICS 469',
  },

];


/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Bookdata.find().count() === 0) {
  _.each(bookdataSeeds, function seedContacts(stuff) {
    Bookdata.insert(stuff);
  });
}
