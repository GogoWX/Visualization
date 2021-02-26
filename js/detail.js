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

//企业列表及切换
(function () {
    let clist = ['润联行·时代', '润联行·西堤', '凤凰置地广场']
    clist.map((company, index) => {
        let chtml = `<option value="${index}">
                        <h3>${company}</h3>
                    </option>`
        $('#company').append(chtml)
    })
})();


function changeC() {
    let chooseD = $('#company').val();
    console.log(chooseD)
}

(function () {
    //事件委托
    // $('.monitor').on('click', ' a', function () {
    //     //点击当前的a 加类名 active  他的兄弟删除类名
    //     $(this).addClass('active').siblings().removeClass('active');
    //     //获取一一对应的下标 
    //     var index = $(this).index();
    //     //选取content 然后狗日对应下标的 显示   当前的兄弟.content隐藏
    //     $('.content').eq(index).show().siblings('.content').hide();
    // });
    //滚动
    //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
    //      然后动画向上滚动，滚动到一半重新开始滚动
    //因为选取的是两个marquee  所以要遍历
    $('.monitor .marquee').each(function (index, dom) {
        //将每个 的所有子级都复制一遍
        var rows = $(dom).children().clone();
        //再将新的到的加入原来的
        $(dom).append(rows);
    });

})();

//统计日期设置及选择
(function () {
    let ddd = new Date();
    let day = ddd.getDate();
    let month = ddd.getMonth() + 1;
    if (ddd.getMonth() < 10) {
        month = "0" + (ddd.getMonth() + 1);
    }
    if (ddd.getDate() < 10) {
        day = "0" + ddd.getDate();
    }
    let datew = ddd.getFullYear() + "-" + month + "-" + day;
    datew = datew.toString();
    $("#udate").val(datew)
    $("#sdate").val(datew)
    $("#edate").val(datew)
})();

function changeD() {
    let chooseD = $('#udate').val();
    console.log(chooseD)
}

function changeS() {
    let chooseD = $('#sdate').val();
    console.log(chooseD)
}

function changeE() {
    let chooseD = $('#edate').val();
    console.log(chooseD)
}

(function () {
    var mySwiper = new Swiper('#swiper3', {
        autoplay: 3000, //可选选项，自动滑动
        autoplayDisableOnInteraction: false,
        // loop: true,
        nextButton: '#service-n',
        prevButton: '#service-p',
        pagination: '#service-f',
        paginationType: 'fraction',
        onSlideChangeStart: function (swiper) {
            console.log(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
            // $('.service-intro h4').text(swiper.activeIndex)
            // $('.service-intro p').text(swiper.activeIndex)
        },
    })
})();