Meteor.customFunctions = 
{
      modal_toggle : function (form_name) 
	{
       
       var e = document.getElementById("addmodal");
       var form=document.getElementsByName("addmodal_comment");
       form[0].id=form_name;
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
	},

      modal_more : function (comment_id) 
  {
      if (comment_id!='')
       {
         //first, we find the comment
       var comment=Comments.findOne({'_id':comment_id});
       var e = document.getElementById("editmodal");
       var comment_textarea=document.getElementById("editmodal_comment");
       comment_textarea.innerHTML=comment['text'];
       //var created_by_textarea=document.getElementById("created_by");
       user=Meteor.users.findOne({'_id':comment['created_by']},{field:{name:1,surname:1}});
       //created_by_textarea.innerHTML=user.profile['name']+' '+user.profile['surname'];
        }
      var e = document.getElementById("editmodal");
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
  },
        modal_edit : function (comment_id) 
  {
      if (comment_id!='')
       {
       
       //first, we find the comment
       var comment=Comments.findOne({'_id':comment_id});
       var e = document.getElementById("editmodal");
       var comment_textarea=document.getElementById('editmodal_comment');
       comment_textarea.innerHTML=comment['text'];
       comment_textarea.name=comment_id;
       
       }
      var e = document.getElementById("editmodal");
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
  },
	is_Organization_owner : function (UID) 
	{
       OID=GET_Organization_ID(Session.get("UID"));
       
	},
  delete_comment: function(comment_id) 
  {
        Comments.remove({'_id':comment_id});  
  },
  edit_comment:function(comment_id)
  {
    
    document.getElementById(comment_id).contentEditable = true;
    
  },
  GET_comment_owner: function(comment_id) 
  {
        comment_owner=Comments.findOne({'_id':comment_id},{fields:{'created_by':1}})['created_by'];
        return comment_owner;   
  }

}