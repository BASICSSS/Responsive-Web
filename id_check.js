$(function(){
    
    var id = $('.id_tbox');
    var pwd =$('.pwd_tbox');
    var name =$('.name_tbox');
    var email =$('.email_tbox');
    var idCheck = $('.idCheck');
    
    $(".memcheck_button").click(function(){
        console.log(id.val());
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: "memid_check.php",
            data:{id:id.val()},
            
            success: function(json){
                if(json.res == 'good'){
                    console.log(json.res);
                    alert("사용가능한 아이디");
                    idCheck.val('1');
                }
                else{
                    alert("다른 아이디 입력");
                    id.focus();
                }
            },
            
            error:function(request,status,error){
alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                console.log("failed");
            }
            
            
            
            
        });
    });
});