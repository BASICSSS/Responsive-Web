$(function(){
    
    var id = $('.id_tbox');
    var pwd =$('.pwd_tbox');
    var name =$('.name_tbox');
    var email =$('.email_tbox');
    var idcomment =
    
    memcheck_button.click(function(){
        console.log(id.val());
        $ajax({
            type: 'post',
            dataType: 'json',
            url: 'memid_check.php',
            data:{id:ic.val()},
            
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
            
            error:function(){
                console.log("failed");
            }
            
            
            
            
        })
    });
});