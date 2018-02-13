Accounts.ui.config({passwordSignupFields:"USERNAME_ONLY"})
Meteor.subscribe("Orgs");

Template.body.helpers({
    organisations: function () {
      return Organisations.find({});
    },
  });
  
  Template.strategy.helpers({
	forms: function (e) {
	    return Forms.find({});
    }
  });
  
  Template.tmpForm.helpers({
     sameOrg: function (othersOrg) {
            var myOrg = new String("OUP");
			if (new String(othersOrg).valueOf() == myOrg.valueOf()){
				return true;
			} else {
				return false;
			}            
		}
	});

  
  Template.addFormEntry.events({
    "submit form": function(event){
        // code goes here
		event.preventDefault();
		//console.log(event.type);
		var FormEntryValue = event.target.Strategy.value;
		var FormEntryName = event.target.Strategy.name;
		var UserID = Meteor.userId();
		var user_organization = Meteor.users.findOne(_id=UserID).profile.organization;
		var organization_id=Organizations.findOne({"name":user_organization})._id;
		var date_insert=new Date().toJSON();
		//TODO with the user id get the organisation !
		console.log("Organization= "+user_organization+" (Org id="+organization_id+")");
		console.log("User ID= "+UserID);
		console.log("Form= "+event.target.Strategy.name);
		console.log("Text= "+FormEntryValue);
		console.log("Date= "+new Date().toJSON());

		
		//Forms.insert({
		//	FormContent: FormEntryValue,
		//	UserName: UserID,
		//	Field: FormEntryName,
		//	Organisation: "current Organisation",
		//	createdAt: new Date(); // current time
		//});
		
		// Clear form
		event.target.Strategy.value = "Input successfully logged.";
		
    }
});