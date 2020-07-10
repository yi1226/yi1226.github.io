collapsed();
msgcollapsed();
sortTable();
// 桌面拖曳+排序(Jquery UI)
var stealth = document.querySelectorAll('.stealth');
$(stealth).sortable({
    containment: "#appcontainer"
}).disableSelection();

// 遮罩效果(點擊開始按鈕)
var menulist = document.querySelector(
    '.menulist');
var modal = document.querySelector('.modal');
menulist.onclick = function () {
    modal.classList.toggle("active");
};
$('.modalmask').on('click', function () {
    $(modal).removeClass('active');
});
var modalmask = document.querySelectorAll('.modalmask');
$(modalmask).sortable({
    containment: '.modalmask'
}).disableSelection();

//彈出視窗 ↓
//右邊分頁
$(".tablink").click(function () {
    $(".tablink").removeClass("active");
    $(this).addClass("active");
    var index = $(".tablink").index(this);
    // console.log(index);
    $(".tabcontent").removeClass("active");
    $(`.tabcontent:nth-child(${index+1})`).addClass("active");
    console.log($(`.tabcontent:nth-child(${index+1})`));

});

// 左選單collapsed效果(非套件)
function collapsed() {

    var d = document,
        accordionToggles = d.querySelectorAll('.areatab'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('ontouchstart' in window),
        pointerSupported = ('pointerdown' in window);

    skipClickDelay = function (e) {
        e.preventDefault();
        e.target.click();
    }

    setAriaAttr = function (el, ariaType, newProperty) {
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function (el1, el2, expanded) {
        switch (expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
    //function
    switchAccordion = function (e) {

        //左選單 箭頭方向
        var imgright = '/Img/SynologyUI/smallwindow/right-chevron.svg';
        var imgdown = '/Img/SynologyUI/smallwindow/down-chevron.svg';
        var thisImg = this.querySelector('.areatab img');
        //-----
        console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.nextElementSibling;
        // console.log(thisAnswer);

        var thisQuestion = e.target;
        // console.log(thisQuestion);

        if (thisAnswer.classList.contains('is-collapsed')) {
            $(thisImg).attr('src', imgdown);
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {

            $(thisImg).attr('src', imgright);
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-collapsed');

    };
    for (var i = 0, len = accordionToggles.length; i < len; i++) {
        if (touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if (pointerSupported) {
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
};

//點擊顯示資料夾
$('#app').on('click', function () {
    $('.filescontainer').css('display', 'block');
    $('.navapp').css('display', 'flex');
});
$('#app2').on('click', function () {
    $('.emptyfiles').css('display', 'block');
    $('.navfiles').css('display', 'flex');
});
$('#app3').on('click', function () {
    $('.memberlist').css('display', 'block');
    $('.navmember').css('display', 'flex');
});
//點擊關閉資料夾
$('.closewindow').on('click', function () {
    $(this).parent().parent().parent().css('display', 'none');
    $(this).parent().parent().parent().css('width', '800px');
    $(this).parent().parent().parent().css('height', '600px');
    $(this).parent().parent().parent().css('top', 'calc(50% - 300px)');
    $(this).parent().parent().parent().css('left', 'calc(50% - 400px)');
});
//點擊關閉nav處資料夾
$('.emptyfiles .closewindow').on('click', function () {
    $('.navfiles').css('display', 'none');
});
$('.filescontainer .closewindow').on('click', function () {
    $('.navapp').css('display', 'none');
});
$('.memberlist .closewindow').on('click', function () {
    $('.navmember').css('display', 'none');
});
// 資料夾位移
$('.filescontainer').draggable({
    containment: "body"
});
$('.optioncontainer').draggable({
    containment: "body"
});
$('.emptyfiles').draggable({
    containment: "body"
});
$('.memberlist').draggable({
    containment: "body"
});


// 資料夾螢幕大小調整
$('.filescontainer').resizable({
    containment: "body"
});
$('.emptyfiles').resizable({
    containment: "body"
});
$('.memberlist').resizable({
    containment: "body"
});
//App資料夾最大化
$('.filescontainer .enlargewindow').on('click', function () {
    var filescontainer = document.querySelector('.filescontainer');
    var fileswidth = filescontainer.offsetWidth;
    // console.log(fileswidth);

    var filesheight = filescontainer.offsetHeight;
    // console.log(filesheight);

    if (fileswidth < 1080 || filesheight < 800) {
        $(filescontainer).css('width', 'calc(100% - 10px)');
        $(filescontainer).css('height', 'calc(100% - 10px)');
        $(filescontainer).css('top', '0px');
        $(filescontainer).css('left', '0px');
    } else {
        $(filescontainer).css('width', '800px');
        $(filescontainer).css('height', '600px');
        $(filescontainer).css('top', 'calc(50% - 300px)');
        $(filescontainer).css('left', 'calc(50% - 400px)');
    }
})
$('.emptyfiles .enlargewindow').on('click', function () {
    var emptyfile = document.querySelector('.emptyfiles');
    var fileswidth = emptyfile.offsetWidth;
    // console.log(fileswidth);

    var filesheight = emptyfile.offsetHeight;
    // console.log(filesheight);

    if (fileswidth < 1080 || filesheight < 800) {
        $(emptyfile).css('width', 'calc(100% - 10px)');
        $(emptyfile).css('height', 'calc(100% - 10px)');
        $(emptyfile).css('top', '0px');
        $(emptyfile).css('left', '0px');
    } else {
        $(emptyfile).css('width', '800px');
        $(emptyfile).css('height', '600px');
        $(emptyfile).css('top', 'calc(50% - 300px)');
        $(emptyfile).css('left', 'calc(50% - 400px)');
    }
})
$('.memberlist .enlargewindow').on('click', function () {
    var memberlist = document.querySelector('.memberlist');
    var fileswidth = memberlist.offsetWidth;
    // console.log(fileswidth);

    var filesheight = memberlist.offsetHeight;
    // console.log(filesheight);

    if (fileswidth < 1080 || filesheight < 800) {
        $(memberlist).css('width', 'calc(100% - 10px)');
        $(memberlist).css('height', 'calc(100% - 10px)');
        $(memberlist).css('top', '0px');
        $(memberlist).css('left', '0px');
    } else {
        $(memberlist).css('width', '800px');
        $(memberlist).css('height', '600px');
        $(memberlist).css('top', 'calc(50% - 300px)');
        $(memberlist).css('left', 'calc(50% - 400px)');
    }
})

// 資料夾最小化
$('.filescontainer .narrowwindow').on('click', function () {
    $('.filescontainer').css('display', 'none');
    $('.navapp').css('background-color', 'rgba(255, 255, 255, 0.2)');
})
$('.navapp').on('click', function () {
    const filestatus = document.querySelector('.filescontainer');
    const appstatus = filestatus.style.display;

    if (appstatus === "block") {
        $('.filescontainer').css('display', 'none');
        $('.navapp').css('background-color', 'rgba(255, 255, 255, 0.2)');
    } else {
        $('.filescontainer').css('display', 'block');
        $('.navapp').css('background-color', 'rgba(255, 255, 255, 0.4)');
    }
})

$('.emptyfiles .narrowwindow').on('click', function () {
    $('.emptyfiles').css('display', 'none');
    $('.navfiles').css('background-color', 'rgba(255, 255, 255, 0.2)');
})
$('.navfiles').on('click', function () {
    const filestatus = document.querySelector('.emptyfiles');
    const appstatus = filestatus.style.display;

    if (appstatus === "block") {
        $('.emptyfiles').css('display', 'none');
        $('.navfiles').css('background-color', 'rgba(255, 255, 255, 0.2)');
    } else {
        $('.emptyfiles').css('display', 'block');
        $('.navfiles').css('background-color', 'rgba(255, 255, 255, 0.4)');
    }
})
$('.memberlist .narrowwindow').on('click', function () {
    $('.memberlist').css('display', 'none');
    $('.navmember').css('background-color', 'rgba(255, 255, 255, 0.2)');
})
$('.navmember').on('click', function () {
    const filestatus = document.querySelector('.memberlist');
    const appstatus = filestatus.style.display;

    if (appstatus === "block") {
        $('.memberlist').css('display', 'none');
        $('.navmember').css('background-color', 'rgba(255, 255, 255, 0.2)');
    } else {
        $('.memberlist').css('display', 'block');
        $('.navmember').css('background-color', 'rgba(255, 255, 255, 0.4)');
    }
})
// Nav SearchBar
$('.searchbar').on('click', function () {
    // 整個區塊無法點擊，避免還是會有不該出現的文字解釋
    $('.navcontent').css('pointer-events', 'none');
    //登入區塊消失
    $('.loginarea').css('display', 'none');
    //訊息列消失
    $('.msgContainer').css('opacity', '0');
    $('.msgContainer').css('pointer-events', 'none');

    var serachBarcontent = document.querySelector('.serachBarcontent');
    var serachBarstatus = serachBarcontent.style.transform;
    // console.log(serachBarstatus);

    if (serachBarstatus === "translateY(40%)") {
        $('.serachBarcontent').css('z-index', '-1');
        $('.serachBarcontent').css('transform', 'translateY(0%)');
        $('.navcontent').css('pointer-events', 'none');
    } else {
        $('.serachBarcontent').css('z-index', '1');
        $('.serachBarcontent').css('transform', 'translateY(40%)');
        $('.navcontent').css('pointer-events', 'all');
    }
})

//login 區塊
$('.information').on('click', function () {
    // 整個區塊無法點擊，避免還是會有不該出現的文字解釋
    $('.navcontent').css('pointer-events', 'none');
    // 搜尋列消失
    $('.serachBarcontent').css('z-index', '-1');
    $('.serachBarcontent').css('transform', 'translateY(0%)');
    //訊息列消失
    $('.msgContainer').css('opacity', '0');
    $('.msgContainer').css('pointer-events', 'none');

    var loginarea = document.querySelector('.loginarea');
    // console.log(loginarea);

    var loginstatus = loginarea.style.opacity;
    var logindis = loginarea.style.display;
    // console.log(loginstatus);
    // console.log(logindis);
    if (logindis === "block") {
        $(loginarea).css('display', 'none');
    } else {
        $(loginarea).css('display', 'block');
    }
})

//message 區塊
$('.message').on('click', function () {
    // 整個區塊無法點擊，避免還是會有不該出現的文字解釋
    $('.navcontent').css('pointer-events', 'none');
    // 搜尋列消失
    $('.serachBarcontent').css('z-index', '-1');
    $('.serachBarcontent').css('transform', 'translateY(0%)');
    // 登入區塊消失
    $('.loginarea').css('display', 'none');

    var msg = document.querySelector('.msgContainer');
    // console.log(msg);

    var msgstatus = msg.style.opacity;
    // console.log(msgstatus);

    if (msgstatus === "1") {
        $(msg).css('opacity', '0');
        $(msg).css('pointer-events', 'none');
        $('.navcontent').css('pointer-events', 'none');
    } else {
        $(msg).css('opacity', '1');
        $(msg).css('pointer-events', 'all');
    }
})

function msgcollapsed() {

    let d = document,
        accordionToggles = d.querySelectorAll('.arrowlink'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('ontouchstart' in window),
        pointerSupported = ('pointerdown' in window);

    skipClickDelay = function (e) {
        e.preventDefault();
        e.target.click();
    }

    setAriaAttr = function (el, ariaType, newProperty) {
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function (el1, el2, expanded) {
        switch (expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
    //function
    switchAccordion = function (e) {

        //箭頭方向
        let up_arrow = '/img/SynologyUI/up.svg';
        let down_arrow = '/img/SynologyUI/down.svg';
        var thisarrow = this.querySelector('.arrow');
        // console.log(thisarrow);
        //------

        console.log("triggered22");
        e.preventDefault();
        let thisAnswer = e.target.parentNode.nextElementSibling.nextElementSibling;
        // console.log(thisAnswer);

        let thisQuestion = e.target;
        // console.log(thisQuestion);

        if (thisAnswer.classList.contains('is-collapsed')) {
            $(thisarrow).attr('src', up_arrow);
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            $(thisarrow).attr('src', down_arrow);
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-collapsed');

    };
    for (let i = 0, len = accordionToggles.length; i < len; i++) {
        if (touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if (pointerSupported) {
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
};
//使用者登出，畫面跳轉
$(".logout").click(function () {
    window.location.href = '../workexperience/DesktopUIlogin.html';
});

//使用者選項點擊開啟視窗
$('.option').on('click', function () {
    $('.loginarea').css('display', 'none');
    $('.optioncontainer').css('display', 'flex');
    $('.navoption').css('display', 'block');
});

//使用者視窗
//縮小
$('.narrow').on('click', function () {
    $('.navoption').css('background-color', 'rgba(255, 255, 255, 0.2)');
    $('.optioncontainer').css('display', 'none');
});
//取消
$('.btncancel').on('click', function () {
    $('.optioncontainer').css('display', 'none');
    $('.navoption').css('display', 'none');
})
//關閉
$('.close').on('click', function () {
    $('.optioncontainer').css('display', 'none');
    $('.navoption').css('display', 'none');
});


//NAVBAR 縮放視窗
$('.navoption').on('click', function () {
    var optioncontainer = document.querySelector('.optioncontainer');
    var optiondis = optioncontainer.style.display;
    console.log(optiondis);

    if (optiondis === "none") {
        $(optioncontainer).css('display', 'flex');
        $('.navoption').css('background-color', 'rgba(255, 255, 255, 0.4)');
    } else {
        $(optioncontainer).css('display', 'none');
        $('.navoption').css('background-color', 'rgba(255, 255, 255, 0.2)');
    }
});

//會員列表

function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("membercontent");
    // console.log(table);

    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        var myrows = table.querySelectorAll('.memberdetail');
        // console.log(myrows);


        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 0; i < (myrows.length - 1); i++) {

            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/

            x = myrows[i].getElementsByTagName("p")[n];

            y = myrows[i + 1].getElementsByTagName("p")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if ($(x).html() > $(y).html()) {
                    //   if ($(x).html().toLowerCase() > $(y).html().toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if ($(x).html() < $(y).html()) {
                    // if ($(x).html().toLowerCase() < $(y).html().toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            myrows[i].parentNode.insertBefore(myrows[i + 1], myrows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

//空白資料夾區塊
////尚有問題  卡太久 先跳過
let app = document.querySelectorAll('.app');
$(app).draggable({ revert: true });  
// $('.emptyfiles').droppable({  
$('.filescontent').droppable({  
    hoverClass: 'active',  
    drop: function(e, ui) {  
        $(this).html(ui.draggable.remove().html());
        $(this).droppable('destroy');  
        $(this).addClass( "ui-state-highlight" )  
    }  
});  
