
      function showHomePage(){
        var u = "controller/homepage.php";
        var obj=$.ajax({url:u,async:false});

        var response = obj.responseText;
        document.getElementById("result").innerHTML = response;

    }

function participants(){
      var u = "controller/participants.php";
      var obj=$.ajax({url:u,async:false});

      var response = obj.responseText;
      document.getElementById("result").innerHTML = response;

}

function posts(){
    var u = "controller/posts.php";
    var obj=$.ajax({url:u,async:false});

    var response = obj.responseText;
    document.getElementById("result").innerHTML = response;
}

function mentors(){
  var u = "controller/mentors.php";
  var obj=$.ajax({url:u,async:false});

  var response = obj.responseText;
  document.getElementById("result").innerHTML = response;
}

function single_post(id){
    var u = "controller/single_post.php?id="+id;
    var obj=$.ajax({url:u,async:false});

    var response = obj.responseText;
    document.getElementById("result").innerHTML = response;
}
