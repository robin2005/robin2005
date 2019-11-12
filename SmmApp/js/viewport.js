!function (N, M) {
    function L() {
        var a = I.getBoundingClientRect().width;
        a / F > 540 && (a = 540 * F);
        var d = a / 10;
        I.style.fontSize = d + "px", D.rem = N.rem = d
    }

    var K, J = N.document, I = J.documentElement, H = J.querySelector('meta[name="viewport"]'),
        G = J.querySelector('meta[name="flexible"]'), F = 0, E = 0, D = M.flexible || (M.flexible = {});
    if (H) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var C = H.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        C && (E = parseFloat(C[1]), F = parseInt(1 / E))
    } else {
        if (G) {
            var B = G.getAttribute("content");
            if (B) {
                var A = B.match(/initial\-dpr=([\d\.]+)/), z = B.match(/maximum\-dpr=([\d\.]+)/);
                A && (F = parseFloat(A[1]), E = parseFloat((1 / F).toFixed(2))), z && (F = parseFloat(z[1]), E = parseFloat((1 / F).toFixed(2)))
            }
        }
    }
    if (!F && !E) {
        var y = N.navigator.userAgent, x = (!!y.match(/android/gi), !!y.match(/iphone/gi)),
            w = x && !!y.match(/OS 9_3/), v = N.devicePixelRatio;
        F = x && !w ? v >= 3 && (!F || F >= 3) ? 3 : v >= 2 && (!F || F >= 2) ? 2 : 1 : 1, E = 1 / F
    }
    if (I.setAttribute("data-dpr", F), !H) {
        if (H = J.createElement("meta"), H.setAttribute("name", "viewport"), H.setAttribute("content", "initial-scale=" + E + ", maximum-scale=" + E + ", minimum-scale=" + E + ", user-scalable=no"), I.firstElementChild) {
            I.firstElementChild.appendChild(H)
        } else {
            var u = J.createElement("div");
            u.appendChild(H), J.write(u.innerHTML)
        }
    }
    N.addEventListener("resize", function () {
        clearTimeout(K), K = setTimeout(L, 300)
    }, !1), N.addEventListener("pageshow", function (b) {
        b.persisted && (clearTimeout(K), K = setTimeout(L, 300))
    }, !1), "complete" === J.readyState ? J.body.style.fontSize = 12 * F + "px" : J.addEventListener("DOMContentLoaded", function () {
        J.body.style.fontSize = 12 * F + "px"
    }, !1), L(), D.dpr = N.dpr = F, D.refreshRem = L, D.rem2px = function (d) {
        var c = parseFloat(d) * this.rem;
        return "string" == typeof d && d.match(/rem$/) && (c += "px"), c
    }, D.px2rem = function (d) {
        var c = parseFloat(d) / this.rem;
        return "string" == typeof d && d.match(/px$/) && (c += "rem"), c
    }
}(window, window.lib || (window.lib = {}));

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}



var platform = '';

function topBar() {
    $('#app').addClass("fs-14");
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        $('#app').addClass("app-page--has-topbar");
    } else {
        platform = getQueryVariable('smm_platform') + '';
        if (platform && (platform.match(/ios/i) || platform.match(/android/i))) {
            $('#app').removeClass("app-page--has-topbar");
        } else {
            $('#app').addClass("app-page--has-topbar");
        }
    }
    $("#app").on("click", ".icon-andriod", function () {
        goDownLoad();
    });
    $("#app").on("click", ".icon-ios", function () {
        goDownLoad();
    });
}

function goDownLoad() {
    platform = getQueryVariable('smm_platform') + '';
    if (platform && platform.match(/ios/i)) {
        return false;
    } else if (platform && platform.match(/android/i)) {
        return false;
    }
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        openAppFun('smm://', "https://go.onelink.me/eO1y/thanksgiving");
    } else if (isIos) {
        openAppFun('smm://', "https://go.onelink.me/eO1y/thanksgiving");
    } else { 
        window.location.href = "https://www.seniormeetme.com/";
    }
    return true;
}

function loadFunction() {
    platform = getQueryVariable('smm_platform') + '';
    if (platform && platform.match(/ios/i) && window.webkit.messageHandlers.chaneNavColor) {
        window.webkit.messageHandlers.chaneNavColor.postMessage("#9C1025");
    } else if (platform && platform.match(/android/i)) {
        window.android.chaneNavColor("#9C1025");
    }
}

function loadShareFunction() {
    platform = getQueryVariable('smm_platform') + '';
    if (platform && platform.match(/ios/i) && window.webkit.messageHandlers.chaneNavColor) {
        window.webkit.messageHandlers.shareNavHandler.postMessage(window.shareData);
    } else if (platform && platform.match(/android/i)) {
        window.android.shareNavHandler(window.shareData);
    }
}

// 根据生日的月份和日期，计算星座。
function getAstro(month,day){
    var s="魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
    var arr=[20,19,21,21,21,22,23,23,23,23,22,22];
    return s.substr(month*2-(day<arr[month-1]?2:0),2);
}

// 根据生日的月份和日期，计算星座。0 魔羯 1 水瓶 2 双鱼 3牡羊 4金牛 5双子 6巨蟹 7狮子 8处女 9天秤 10天蝎 11射手 12魔羯
function getAstroIndex(m,d){
    return m-(d<"102223444433".charAt(m-1)- -19);  //输出0～12的数字，0表示摩羯，1表示水瓶，依此类推，...，11是射手，12是摩羯。
}

function radomDescription(){
    var shareData = {sharetitle: 'Happy Thanksgiving', sharecontent: '3 secs to meet real you, so accurate!', sharelinkurl: window.location.href};
    window.shareData = shareData;  
} 