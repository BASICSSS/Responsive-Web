$(function () {

    var id = $('.id_tbox');
    var pwd = $('.pwd_tbox');
    var name = $('.name_tbox');
    var email = $('.email_tbox');
    var idCheck = $('.idCheck');
    var placeholderval;
    var formdata;
    var trigger = true;
    //var jsn;
    //var jsn2

    $(".memcheck_button").click(function () {
        placeholderval = id.attr('placeholder');
        formdata = $(".logform").serializeArray();


        $.post("id_check.php",
            formdata

            ,
            function (data) {
                if (data) {
                    
                     
                    
                    setInterval(toggle,500);  
                    setTimeout(st,1000);
                    //clearInterval(toggle);
                    
                    function toggle() {

                        if (trigger) {

                            $(".id_check_border").fadeOut(500);
                            trigger = false;
                        } else {

                            $(".id_check_border").fadeIn(500);
                            trigger = true;
                        }

                    }
                    
                    var st = function stop_ani()
                    {

                        clearInterval(toggle);
                    }
                   
                    console.log(data);
                    console.log(data.idCheck);
                    // jsn = JSON.stringify(data);
                    //console.log(jsn[17]); json으로 안받고 그냥 text로 받앗을때 무식하게 문자열 잘라서 쓴거
                    if (data.idCheck === "1") {
                        $(".id_check_p1").show();
                        $(".sec1").addClass("on");
                        $(".id_check_p1").text("이미 존해하는 아이디 입니다.");
                        $(".id_tbox").val("");
                    } else if (data.idCheck === "0") {
                        $(".id_check_p1").show();
                        $(".sec1").addClass("on");
                        $(".id_check_p1").text("사용 가능한 아이디입니다.");
                        // $('.id_tbox').attr("placeholder", "사용가능한 아이디입니다.");
                    } else {
                        $(".sec1").removeClass("on");
                        $(".id_check_p1").hide();
                        $('.id_tbox').attr("placeholder", "아이디를 적어 주십시오");
                    }


                }
            }, "json");


    });
});