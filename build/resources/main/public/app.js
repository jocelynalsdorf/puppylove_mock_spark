$(document).ready(function() {
    console.log( "ready!" );



$(".test").click(function(){

$.ajax({
    url: "http://api.randomuser.me/?results=3&gender=female",
    dataType: 'JSON',
    success: function(responseJSON){
     var users = [];
     responseJSON.results.forEach(function(user) {
       users.push(user);
    $(".owner-list").append("<p>" + "profile name" + user.user.name.first + "profile pic"+ "<img src=' "+ user.user.picture.medium  + "'" + "/></p>");
     });
   
    }


});
  
});
  
});