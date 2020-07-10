// login按鈕轉場

$(".Signin").click(function (event) {
    event.preventDefault();

    $('.loginsuccess').css('opacity', '0');
    $('.loginsuccess').css('pointer-events', 'none');
    setTimeout(function () {
        $('.loginarea').css('opacity', '0');
        $('.loginarea').css('pointer-events', 'none');
    }, 1500)
    $('.loginarea').addClass('success');
    
    setTimeout(function(){
        window.location.href = '../workexperience/DesktopUI.html'
    },2000)
});


// $('.loginarea').bind( 'transitionend', function() {
//     setTimeout(function(){
//         window.location.href = "http://www.google.com";
//     },1000)
// });

// 時間

function startTime() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDay();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    $('.timetext').html(hour + ":" + min + ":" + sec);
    $('.datetext').html(year + "年" + month + "月" + "星期" + day);
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}
startTime();
checkTime();