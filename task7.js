$(document).ready(function(){
    $('.btn').click(function(){
        var input = $('#input').val();
        if(input == ""){
            alert('Text box is empty. Please Enter text.');
            return;
        }
        else{
            $('#tasks').append("<p>"+ input +"</p");
            return;
        }

    });
  });