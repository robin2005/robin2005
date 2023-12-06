(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.h5OpenAppControl = {})));
}(this, (function (exports) { 'use strict';

    // 绑定事件
    var bind = function bind(dom, event, fun) {
        // bind event
        if (dom.addEventListener) {
            dom.addEventListener(event, fun, !1);
        } else if (dom.attachEvent) {
            dom.attachEvent(event, fun);
        } else {
            throw new Error('不存在的方法');
        }
    };

    // 格式化url
    var formatUrl = function formatUrl(url, params) {
        var arr = [];
        for (var p in params) {
            if (p && params[p]) {
                arr.push(p + '=' + encodeURIComponent(params[p]));
            }
        }
        arr = arr.join('&');
        var u = url.split("?");
        var newUrl = null;
        if (u.length == 2) {
            newUrl = u[0] + "?" + u[1] + "&" + arr;
        } else {
            newUrl = u[0] + "?" + arr;
        }
        return newUrl;
    };

    //使用计算时差的方案打开APP
    var checkOpen = function checkOpen(cb) {
        var _clickTime = +new Date();

        function check(elsTime) {
            if (elsTime > 3000 || document.hidden || document.webkitHidden) {
                cb(1);
            } else {
                cb(0);
            }
        }

        //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
        var _count = 0,
            intHandle;
        intHandle = setInterval(function () {
            _count++;
            var elsTime = +new Date() - _clickTime;
            if (_count >= 100 || elsTime > 3000) {
                clearInterval(intHandle);
                check(elsTime);
            }
        }, 20);
    };

    // 判断浏览器
    var Navigator = navigator.userAgent;
    var ifAndroid = Navigator.match(/(Android);?[\s\/]+([\d.]+)?/) ? true : false;
    var ifIos = Navigator.match(/iPhone|iPad|iPd/i) ? true : false;

    // 安卓版本号
    var androidVersion = Navigator.match(/Android\s*(\d+)/);
    androidVersion = androidVersion ? androidVersion[1] || 0 : 0;

    var iframe = "plugIn_downloadAppPlugIn_loadIframe";
    var isIfr = false;

    // 打开APP
    var openApp = function openApp(option) {
        var openLink = null,
            downloadUrl = null;
        if (ifIos) {
            openLink = option.iosLink || null;
            // 开启应用宝跳转
            downloadUrl = option.iosYyb || false ? option.yybDownloadUrl || null : option.iosDownloadUrl || null;
        } else if (ifAndroid) {
            openLink = option.androidLink || null;
            // 开启应用宝跳转
            downloadUrl = option.androidYyb || false ? option.yybDownloadUrl || null : option.androidDownloadUrl || null;
        }
        var params = option.params || [];
        openLink = formatUrl(openLink, params); //格式化url 加参数
        // android5 及以上的高版本&& androidVersion >= 5
        if (ifAndroid && androidVersion >= 5) {
            var a = document.createElement("a"); //创建a元素
            a.setAttribute("href", openLink), a.style.display = "none", a.setAttribute("id", "aTag"), document.body.appendChild(a);
            document.getElementById('aTag').click();
        } else {
            window.location.href = downloadUrl;
        }
        // 设备是ios
        if (ifIos) {
            // 如果是自动跳转或者未开启Universal Link 用之前的链接 否则用 Universal Link
            // var iosUniversalLinkEnabled = (option.iosUniversalLinkEnabled || false) ? false : true
            // openLink = isAutoLaunchApp || iosUniversalLinkEnabled ? openLink : (option.ios9Link || null);

            setTimeout(function () {
                // 必须要使用settimeout
                var a = document.createElement("a"); //创建a元素
                a.setAttribute("href", openLink), a.style.display = "none", a.setAttribute("id", "aTag"), document.body.appendChild(a);
                document.getElementById('aTag').click();
            }, 0);
        }

        checkOpen(function (opened) {
            // APP没有打开成功  并且开启自动跳转到下载页
            if (opened === 0 && option.autoRedirectToDownloadUrl) {
                window.location.href = downloadUrl;
            }
        });
    };

    // 初始化
    var controlInit = function controlInit(option) {
        if (option.button) {
            option.button.setAttribute('href', 'javascript:void(0)');
            bind(option.button, 'click', function () {
                if (!isIfr) {
                    var ifr = document.createElement("iframe");
                    ifr.id = iframe;
                    document.body.appendChild(ifr);
                    document.getElementById(iframe).style.display = "none";
                    document.getElementById(iframe).style.width = "0px";
                    document.getElementById(iframe).style.height = "0px";
                    isIfr = true;
                }
                // 打开APP
                openApp(option);
            });
        }
    };

    exports.controlInit = controlInit;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
