$(document).ready(function(){
    // $('.name').hide();
    $('#bt1').click(function(){
        $('.name').hide();
    });
    $('#bt2').click(function(){
        // $('ul li:first-child').hide();
        $('ul li:nth-child(2)').hide();
    });
    $('#bt3').click(function(){
        $('a[target="_blank"]').hide();
    });

    $('#hide').click(function(){
        $(this).hide();
    });
    $('#hide').dblclick(function(){
        $(this).hide();
    });
    $('#hide').mouseenter(function(){
        alert("hi there");
    });
    // $('#hide').hover(function(){
    //     alert("Hello");
    // },
    // function(){
    //     alert("Bye");
    // });

    $('#input').focus(function(){
        $(this).css("background","red");
    });
    $('#text2').on("click",function(){
        $(this).hide();
    });
    $('#text2').on({
        mouseenter:function(){
            $(this).css("background","red");
        },
        mouseleave:function(){
            $(this).css("background","Green");
        }
    });
    $('#btn-6').click(function(){
        $('#text3').hide('slow');
    });

    $('#btn-7').click(function(){
        $('#text3').show('slow');
    });

    $('#btn-9').click(function(){
        $('.box1').fadeIn();
        $('.box2').fadeIn(4000);
        $('.box3').fadeIn(5000);
    });
    $('#btn-10').click(function(){
        $('.box1').fadeOut();
        $('.box2').fadeOut(4000);
        $('.box3').fadeOut(5000);
    });
    $("#flip").click(function(){
        $("#panel").slideToggle(5000);
    });
      $("#stop").click(function(){
        $("#panel").stop();
    });
});