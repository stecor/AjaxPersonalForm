 $(document).ready(function(){

  $("#default").click(function(){
  	 // make an AJAX call here, and place results into the form

    $.post('backend.php',{act:'default'},
          function(data){
        $('#name').val(data['name']);
        $('#postal').val(data['postal']);
        $('#phone').val(data['phone']);
        $('#address').val(data['address']);
        },'json')
    // prevents link click default behaviour
     return false;
});

$("#clear").click(function(){

   // make an AJAX call here, and place empty results into the form
   $("#success").html("");
   $("#errors").empty();

  $.post('backend.php',{act:'clear'},
        function(data){
      $('#name').val(data['name']);
      $('#postal').val(data['postal']);
      $('#phone').val(data['phone']);
      $('#address').val(data['address']);
      },'json')
  // prevents link click default behaviour
   return false;
});

  $("#dataform").submit(function(){
     // Clear any success or error messages
     $("#success").html("");
     $("#errors").empty();

  	 // make an AJAX call here, and set error or success accordingly

    var data = {"act":"validate"};
    data = $(this).serialize() + "&" + $.param(data);
    $.post("backend.php",data,function(data){

        if(data['name'] == 1 && data['postal'] == 1 && data['phone'] == 1 && data['address'] == 1){
            $("#success").html("Success!")
        }

        if(data['name'] == 0){
           $("#errors").append("<li>Name is invalid!</li>")
        }

        if(data['postal'] == 0){
           $("#errors").append("<li>Postal Code is invalid!</li>")
        }

        if(data['phone'] == 0){
           $("#errors").append("<li>Phone Number is invalid!</li>")
        }

        if(data['address'] == 0){
           $("#errors").append("<li>Address is invalid!</li>")
        }
    },'json'
    );

    // prevents submit button default behaviour
    return false;
  });

  });
