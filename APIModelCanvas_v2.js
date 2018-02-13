//UserNames = new Mongo.Collection("usernames");
Forms = new Mongo.Collection("forms");
Fields = new Mongo.Collection("fields");

// The AMC Data Model: Organizations and Users
Organizations = new Mongo.Collection("Organizations_collection");
//the organization schema is:


var organization_schema = new SimpleSchema({
//_id: organization is generated by the system
  "name": {
    // Name of the organization, entered by the organization administrator
    label: 'name',
    // Specifying the allowed type
    type: String
  },
  "admin": {
  	//organization administrator. An entry from the accounts collection
    label: 'admin',
    type: String
  },
  "description": {
    label: 'Description of the Organization API',
    type: String
  },
  "date":{
   label: 'Date inserted',
   type: Date
  },
  "comments.$.number":{
  // index of the comment      
        label: 'index of the Comment',
        type: Number
  },
  "comments.$.form":{
  // form the comment belongs to
        label: 'Form this comment belongs to',
        type: String
  },
  "comments.$.created_by":{
  //who made the comment. this is an id on the accounts collection
        label: 'Created by',
        type: String
  },
  "comments.$.text": {
  // the text of the comment
        label: 'Comment text',
        type: String
  },
  "comments.$.final": {
  // boolean value indicating whether this is a final comment (conclusion) or part of the brainstorm
        label: 'final',
        type: Boolean
  }
});


Organizations.attachSchema(organization_schema);

if(Meteor.isServer){
Meteor.publish("Orgs", function() 
	{
  	return Organizations.find({}, {fields: {'name': 1}});
	});
}

