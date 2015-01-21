$db = $.couch.db("statuses");
var loadStatusMessages = function(){       
  $db.view("app/messages",{
    success: function( data ) {              
      console.log(data);
    }
  });
}

$(document).ready(function(){
  loadStatusMessages();
});
