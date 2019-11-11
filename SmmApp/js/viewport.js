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

//打开（下载）App
function openApp() {
    var ua = window.navigator.userAgent.toLowerCase();
    //微信
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        window.location.href = 'downLoadForPhone';
    } else {//非微信浏览器
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
            var loadDateTime = new Date();
            window.setTimeout(function () {
                var timeOutDateTime = new Date();
                if (timeOutDateTime - loadDateTime < 5000) {
                    window.location = "https://apps.apple.com/cn/app/senior-meet-me-dating-50/id1465679728";//ios下载地址
                } else {
                    window.close();
                }
            }, 2000);
            window.location = "smm://";
        } else if (navigator.userAgent.match(/android/i)) {
            var state = null;
            try {
                window.location = 'smm://';
                setTimeout(function () {
                    window.location = ""; //android下载地址 
                }, 500);
            } catch (e) { }
        }
    }
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
            jqueryAlert({
                'content': platform,
                'closeTime': 2000,
                'end': function () {
                    console.log('已关闭弹框')
                }
            }).show();
            $('#app').removeClass("app-page--has-topbar");
            if (platform.match(/ios/i) && window.webkit.messageHandlers.chaneNavColor) {
                window.webkit.messageHandlers.chaneNavColor.postMessage("#9C1025");
            } else {
                window.webkit.messageHandlers.chaneNavColor.postMessage("#9C1025");
            }
        } else {
            $('#app').addClass("app-page--has-topbar");
        }
    }
    $("#app").on("click", ".icon-andriod", function () {
        openApp();
    });
}
function shareNavHandler() {
    platform = getQueryVariable('smm_platform') + '';
    var shareData = { sharetitle: 'Happy Thanksgiving', sharecontent: 'Happy Thanksgiving', sharelinkurl: 'Happy Thanksgiving', shareimg: 'Happy Thanksgiving' };
    if (platform && platform.match(/ios/i)) {
        window.webkit.messageHandlers.shareNavHandler.postMessage(shareData);
        jqueryAlert({
            'content': platform,
            'closeTime': 2000,
            'end': function () {
                console.log('已关闭弹框')
           }
        }).show();
    } else if (platform && platform.match(/android/i)) {
        window.webkit.messageHandlers.shareNavHandler.postMessage(shareData);
    }
}