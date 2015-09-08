$(document).ready(function() {
    

  $(".test").click(function(){

    $.ajax({
        url: "http://api.randomuser.me/?results=3&gender=female",
        dataType: 'JSON',
        success: function(responseJSON){
         var users = [];
         responseJSON.results.forEach(function(user) {
           users.push(user);
        $(".owner-list").append("<p class='owner-name-bit'>" + "Owner Name:  " + user.user.name.first + " " +  user.user.name.last + "Profile Image:  "+ "<img src=' "+ user.user.picture.medium  + "'" + "/></p>");
         });  
         var ownerNames = $(".owner-name-bit").text();

        }
      });
  });

  $(".dogs").click(function(){

    var albumAPI = "https://api.imgur.com/3/gallery/r/dogpictures";
    $.ajax({
      url: albumAPI,
      headers: {
      Authorization: 'Client-ID ' + "a74f0f411a16a0b",          
                },
      type: 'GET',
      dataType: 'json',
      success: function(data) { 
       var dogs = [];
         data.data.forEach(function(dog) {
          dogs.push(dog);
        $(".dog-list").append("<p class='dog'>" + "<img class='dog-img' src=' "+ dog.link  + "'" + "/></p>");
        });
           //console.log(dogs[0].link);
      }
      
    });

  });  


  
});