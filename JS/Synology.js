collapsed();
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

//彈出視窗 ↓
//左選單 箭頭方向
var imgright = '/Img/SynologyUI/smallwindow/right-chevron.svg';
var imgdown = '/Img/SynologyUI/smallwindow/down-chevron.svg';
$('.areatab').on('click', function () {
    var thisImg = this.querySelector('.areatab img');
    var Imgsrc = $(thisImg).attr('src');
    console.log(thisImg);

    if (Imgsrc === imgright) {
        $(thisImg).attr('src', imgdown);
    } else {
        $(thisImg).attr('src', imgright);
    }
});

//右邊分頁
$(".tablink").click(function () {
    $(".tablink").removeClass("active");
    $(this).addClass("active");
    var index = $(".tablink").index(this);
    console.log(index);
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
        console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.nextElementSibling;
        console.log(thisAnswer);

        var thisQuestion = e.target;
        console.log(thisQuestion);

        if (thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
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
var app = document.querySelectorAll('.app');
$(app).on('click', function () {
    $('.filescontainer').css('display', 'block');
    $('.navapp').css('display', 'block');
});
//點擊關閉資料夾
$('.closewindow').on('click', function () {
    $('.filescontainer').css('display', 'none');
    $('.filescontainer').css('width', '800px');
    $('.filescontainer').css('height', '600px');
    $('.filescontainer').css('top', 'calc(50% - 300px)');
    $('.filescontainer').css('left', 'calc(50% - 400px)');
    $('.navapp').css('display', 'none');
});

// 資料夾位移
$('.filescontainer').draggable({
    containment: "body"
});

// 資料夾螢幕大小調整
$('.filescontainer').resizable({
    containment: "body"
});

//資料夾最大化
$('.enlargewindow').on('click', function () {
    var filescontainer = document.querySelector('.filescontainer');
    var fileswidth = filescontainer.offsetWidth;
    console.log(fileswidth);

    var filesheight = filescontainer.offsetHeight;
    console.log(filesheight);

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

// 資料夾最小化
$('.narrowwindow').on('click', function () {
    $('.filescontainer').css('display', 'none');
    $('.navapp').css('background-color', 'rgba(255, 255, 255, 0.3)')
})
$('.navapp').on('click', function () {
    const filestatus = document.querySelector('.filescontainer');
    const appstatus = filestatus.style.display;

    if (appstatus === "block") {
        $('.filescontainer').css('display', 'none');
    } else {
        $('.filescontainer').css('display', 'block');
    }
})

// Nav SearchBar
$('.searchbar').on('click', function () {

    $('.loginarea').css('opacity', '0');
    $('.loginarea').css('pointer-events', 'none');

    var serachBarcontent = document.querySelector('.serachBarcontent');
    var serachBarstatus = serachBarcontent.style.transform;
    console.log(serachBarstatus);

    if (serachBarstatus === "translateY(40%)") {
        $('.serachBarcontent').css('z-index', '-1');
        $('.serachBarcontent').css('transform', 'translateY(0%)');
    } else {
        $('.serachBarcontent').css('z-index', '1');
        $('.serachBarcontent').css('transform', 'translateY(40%)');
    }
})

//login 區塊
$('.information').on('click', function () {
    $('.serachBarcontent').css('z-index', '-1');
    $('.serachBarcontent').css('transform', 'translateY(0%)');

    var loginarea = document.querySelector('.loginarea');
    console.log(loginarea);

    var loginstatus = loginarea.style.opacity;
    console.log(loginstatus);

    if (loginstatus === "1") {
        $(loginarea).css('opacity', '0');
        $(loginarea).css('pointer-events', 'none');
    } else {
        $(loginarea).css('opacity', '1');
        $(loginarea).css('pointer-events', 'all');
        $('.loginarea').removeClass('success');
        $('.loginsuccess').css('opacity', '1');
        $('.loginsuccess').css('pointer-events', 'all');
    }
})

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
});