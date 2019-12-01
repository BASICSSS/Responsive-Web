$(function () {

    var id = $('.id_tbox');
    var pwd = $('.pwd_tbox');
    var name = $('.name_tbox');
    var email = $('.email_tbox');
    var idCheck = $('.idCheck');
    var placeholderval;
    var formdata;


    $(".memcheck_button").click(function () {
        placeholderval = id.attr('placeholder');
        formdata= $(".logform").serializeArray();
        console.log(formdata);
        console.log(placeholderval);


        $.post("id_check.php", 
            formdata
            
        , function (data) {
            if (data) {
                console.log(data);
                if(data.idCheck =='1'){
                $('.id_tbox').attr("placeholder", data);
                }
                else{
                $('.id_tbox').attr("placeholder", "sssss");
                }
            }  
        });


    });
});
