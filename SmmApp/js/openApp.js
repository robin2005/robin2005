function openAppFun(openUrl, callback) {
    //区分是否android和ios方法
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){ 

    }else if(isIos){
        window.location.href = openUrl;
    }
    
    //检查app是否打开
    function checkOpen(cb){
        var _clickTime = +(new Date());
        function check(elsTime) {
            if ( elsTime > 3000 || document.hidden || document.webkitHidden) {
                cb(1);
            } else {
                cb(0);
            }
        }
        //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
        var _count = 0, intHandle;
        intHandle = setInterval(function(){
            _count++;
            var elsTime = +(new Date()) - _clickTime;
            if (_count>=100 || elsTime > 3000 ) {
                clearInterval(intHandle);
                check(elsTime);
            }
        }, 20);
    }
    //在iframe 中打开APP
    var ifr = document.createElement('iframe');
    ifr.src = openUrl;
    ifr.style.display = 'none';
    if (callback) {
        checkOpen(function (opened) {//checkOpen中的cbk参数 = function (opened)
            if(opened == 0){
                  window.location.href = callback;
            }else if(opened ==1){
                //用户打开了app  用户有安装app 
            }
        });
        }
    document.body.appendChild(ifr);
    setTimeout(function() {
        document.body.removeChild(ifr);
    }, 3000);
}