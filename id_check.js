$(function(){
    
    var id = $('.id_tbox');
    var pwd =$('.pwd_tbox');
    var name =$('.name_tbox');
    var email =$('.email_tbox');
    var idCheck = $('.idCheck');
    
    $(".memcheck_button").click(function(){
        console.log(id.val());

	$.post( "id_check.php", {id:id.val()}, function(data){if(data){ $('.id_tbox').parent().find("p.id").html(data);}});
            
            
        });
    });