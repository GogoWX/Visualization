//自调用函数
(function () {
    // 1、页面一加载就要知道页面宽度计算
    var setFont = function () {
        // 因为要定义变量可能和别的变量相互冲突，污染，所有用自调用函数
        var html = document.documentElement; // 获取html
        // 获取宽度
        var width = html.clientWidth;

        // 判断
        // if (width < 1024) width = 1024
        if (width > 1920) width = 1920
        // 设置html的基准值
        var fontSize = width / 80 + 'px';
        // 设置给html
        html.style.fontSize = fontSize;
    }
    setFont();
    // 2、页面改变的时候也需要设置
    // 尺寸改变事件
    window.onresize = function () {
        setFont();
    }
})();

//密码显隐
(function () {
    $('.put-c').on('click', 'i', function () {
        if ($('#password').attr('type') == 'password') {
            $('#password').attr('type', 'text')
            $('.put-c i').css('background-image', "url('./images/xianshi.png')")
        } else {
            $('#password').attr('type', 'password')
            $('.put-c i').css('background-image', "url('./images/yincang.png')")
        }
    })
})();

//提交重置
(function () {
    $("#cancel").on('click', function () {
        $('#password').val('')
        $('#username').val('')
    })
    $("#confirm").on('click', function () {
        if ($('#password').val() != '' && $('#username').val() != '') {
            localStorage.setItem("username", $('#username').val());
            localStorage.setItem("password", $('#password').val());
            console.log(localStorage.getItem("username"), localStorage.getItem("password"))
            //尝试登录 登陆成功后 跳转
            location.replace('index.html')
        } else {
            if($('#username').val() == '') {
                alert('请填写用户名称！')
            } else if ($('#password').val() == '') {
                alert('请填写密码！')
            } else {
                alert('请填写用户名或密码！')
            }
        }
    })
})();