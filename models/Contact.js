const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
  nmFull: 'string',
  nmPref: 'string',     // Preferred Name (nickname) - REQUIRED
  orgTitle: 'string',  // Title
  org: 'string',       // Organization
  orgStatus: 'string',  // iyai+ status - REQUIRED
  orgWeb: 'string',    // Business Website
  addrHome: 'string',  // Home Address
  addrMail:'string',  // Mailing Address
  emIyai:'string',     // Email "iyai+"
  emOther:'string',    // Email "other"
  emPref:'string',      // Email Preferred - REQUIRED
  phIyai:'string',     // Phone Number "iyai"
  phMob:'string',      // Phone Number "mobile"
  phHome:'string',     // Phone Number "home"
  phOff:'string',      // Phone number "office"
  phFax:'string',      // Phone number "fax"
  phPref:'string',     // Phone number "Preferred"
  supName:'string',    // Admin Support Name
  supEmail:'string',   // Admin Support Email
  supPhone:'string',   // Admin Support Phone
  // The fields below have not been added to the application yet. (4/18/2019 - Tre')
  // ADDITIONAL FIELDS
  userUpdate:'string',   // who updated the contact
  userCreated:'string',  // who created this contact
  dateupdated:'string',  // date contact was updated
  dateCreated:'string',  // date contact was created
  dateOfBirth:'string',  // date of birth. We have minors in the program
  addrMailCountry:'string',  // country for Mailing address
  addrHomeCountry:'string',  // country for Home address
  version: 'number',      // MongoDB best practice for dealing with changes to db document data
  lists:'string',            // list user should appear in
  visibility:'string',       // groups that can view the contact. For example "public", "self (name ID)", etc
  notes:'string',            // contact notes
  twitter:'string'        // twitter account
},{
  collection: 'iyaiContacts'
});

module.exports = mongoose.model('Contact',Contact);
