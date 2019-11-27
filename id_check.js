$(function(){
    
    var id = $('.id_tbox');
    var pwd =$('.pwd_tbox');
    var name =$('.name_tbox');
    var email =$('.email_tbox');
    var idCheck = $('.idCheck');
    var placeholderval;

    
    
    $(".memcheck_button").click(function(){
        placeholderval = id.attr('placeholder');
        console.log(id.val());
        console.log(placeholderval);
      

	$.post( "id_check.php", {id:id.val()}, function(data){if(data){ $('.id_tbox').attr("placeholder", data);}});
            
            
        });
    });