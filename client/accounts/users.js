Template.Login.events({  
    'submit #login-user': function(event, template) {
        // 1. Collect the username and password from the form
        var username = template.find('#login-username').value,
            password = template.find('#login-password').value;
            organization = template.find('#login-organization').value;;
console.log(username+","+password+","+organization);
        // 2. Attempt to login.
            Meteor.loginWithPassword(username, password, function(error) {
            // 3. Handle the response
  
            if (Meteor.user()) {
                // Redirect the user to where they're loggin into. Here, Router.go uses
                // the iron:router package.
                console.log("User logged in")
                Router.go('start');
            } else {
                // If no user resulted from the attempt, an error variable will be available
                // in this callback. We can output the error to the user here.
                var message = "There was an error logging in: <strong>" + error.reason + "</strong>";
                template.find('#form-messages').html(message);
            }

            return;
        });
        
        return false;
    }
});



/* client/accounts/users.js */

Template.CreateUser.events({  
  'submit #create-user': function(event, template) 
  {
    var formusername = template.find('#create-user-username').value,
        formpassword = template.find('#create-user-password').value;
        formorganization = template.find('#create-user-organization').value;
        formname = template.find('#create-user-name').value;
        formsurname = template.find('#create-user-surname').value;

    //    console.log(formusername+","+formpassword+","+formorganization+","+formname+","+formsurname);

    // You can go about getting your data from the form any way you choose, but
    // in the end you want something formatted like so:
    var user = {
      username: formusername,
      password: formpassword,
      profile:{organization: formorganization,name:formname,surname:formsurname}
    }

    // Post the user to the server for creation
    Accounts.createUser(user, function (error) {
      if (error) {console.log(error);}
    });
    console.log("User registered")
    Router.go("start");
    return false;
  }
});


Template.new_user.events({
    'click': function(){
    Router.go("CreateUser");
    }
});