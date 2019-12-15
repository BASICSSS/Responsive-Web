$(function () {

    var id = $('.id_tbox');
    var pwd = $('.pwd_tbox');
    var name = $('.name_tbox');
    var email = $('.email_tbox');
    var idCheck = $('.idCheck');
    var placeholderval;
    var formdata;
    var trigger = true;
    var count = 0;
    //var jsn;
    //var jsn2

    $(".memcheck_button").click(function () {
        placeholderval = id.attr('placeholder');
        formdata = $(".logform").serializeArray();
        count = 0;//여러번 누리면 계속 누적되서 적용되는거 수정해야힘
    


        $.post("id_check.php",
            formdata

            ,
            function (data) {
                if (data) {

                    console.log(data);
                    console.log(data.idCheck);
                    // jsn = JSON.stringify(data);
                    //console.log(jsn[17]); json으로 안받고 그냥 text로 받앗을때 무식하게 문자열 잘라서 쓴거
                    if (data.idCheck === "1") {
                        $(".id_check_border").fadeIn(500);

                        $(".id_check_p1").show();
                        $(".sec1").addClass("on");

                        setInterval(toggle, 500);
                        //clearInterval(toggle);

                        $(".id_check_p1").text("이미 존해하는 아이디 입니다.");
                        $(".id_tbox").val("");
                        
                    } else if (data.idCheck === "0") {
                        $(".id_check_p1").show();
                        $(".sec1").addClass("on");
                        $(".id_check_p1").text("사용 가능한 아이디입니다.");
                        // $('.id_tbox').attr("placeholder", "사용가능한 아이디입니다.");
                    } else {

                        $(".sec1").removeClass("on");
                        $(".id_check_border").fadeIn(500);
                        $(".id_check_p1").hide();
                        setInterval(toggle, 500);
                        //clearInterval(toggle);
                        $('.id_tbox').attr("placeholder", "아이디를 적어 주십시오");
                       
                    }


                }
            }, "json");


    });

    function toggle() {
        
        if (count == 2) {

            clearInterval(toggle);
        } else {


            if (trigger) {

                $(".id_check_border").fadeOut(500);
                trigger = false;
                count++;
            } else {

                $(".id_check_border").fadeIn(500);
                trigger = true;
                
            }

        }
    }
});
