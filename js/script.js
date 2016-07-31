
      function showHomePage(){
        var u = "http://niftypac-aix.cavenetworks.pw/controller/homepage.php";
        var obj=$.ajax({url:u,async:false});

        var response = obj.responseText;
        document.getElementById("result").innerHTML = response;

    }

function participants(){
      var u = "http://niftypac-aix.cavenetworks.pw/controller/participants.php";
      var obj=$.ajax({url:u,async:false});

      var response = obj.responseText;
      document.getElementById("result").innerHTML = response;

}

function posts(){
    var u = "http://niftypac-aix.cavenetworks.pw/controller/posts.php";
    var obj=$.ajax({url:u,async:false});

    var response = obj.responseText;
    document.getElementById("result").innerHTML = response;
}

function mentors(){
  var u = "http://niftypac-aix.cavenetworks.pw/controller/mentors.php";
  var obj=$.ajax({url:u,async:false});

  var response = obj.responseText;
  document.getElementById("result").innerHTML = response;
}

function single_post(id){
    var u = "http://niftypac-aix.cavenetworks.pw/controller/single_post.php?id="+id;
    var obj=$.ajax({url:u,async:false});

    var response = obj.responseText;
    document.getElementById("result").innerHTML = response;
}
