// const observer = new PerformanceObserver(list)=> {
//     const entries = list.getEntries();
//     let totalBytes = 0;
//     let loadedBytes = 0;
//     for (const entry of entries) {
//         totalBytes += entry.transferSize;
//         loadedBytes += entry.encodedBodySize || entry.decodedBodySize

//     }
//     const progress = loadedBytes / totalBytes * 100;
//     console.log('静态资源加载进度：${progress.toFixed(2)}')
// }
// observer.observe({ entryTypes: ['resource'] })
// const resources = window.performance.getEntriesByType('resource')
// let totalBytes = 0;
// let loadedBytes = 0;
// for (const resource of resources) {
//     totalBytes += resource.transferSize;
//     loadedBytes += resource.encodedBodySize || resource.decodedBodySize;

// }
// const progress = loadedBytes / totalBytes * 100;
// console.log('静态资源加载进度：${progress.toFixed(2)}')
//#region -----------------------------------函数----------------------------------------
function animatetop(obj, target, steptime, callback) {//苹果动画
    clearInterval(obj.timer);
    // console.log(target, target * obj.parentElement.offsetHeight, obj.offsetTop)
    target = target * obj.parentElement.offsetHeight

    obj.timer = setInterval(function () {
        var step = (target - obj.offsetTop) / steptime;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop >= target) {
            clearInterval(obj.timer);

            if (callback) {
                callback();
            } else {

            }
        }
        obj.style.top = obj.offsetTop + step + 'px';
    }, 30);
}
function animateend(obj, target, steptime, callback) {//苹果动画
    clearInterval(obj.timer);
    // console.log(target, target * obj.parentElement.offsetHeight, obj.offsetTop)
    target = target * window.innerHeight
    // console.log(obj.parentElement.offsetHeight)
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetTop) / steptime;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop <= target) {
            clearInterval(obj.timer);

            if (callback) {
                callback();
            } else {

            }
        }
        obj.style.top = obj.offsetTop + step + 'px';
    }, 35);
}
function toolleft(obj, target, targettop, steptime, callback) {//工具箱动画
    clearInterval(obj.timer);
    // console.log(target, target * obj.parentElement.offsetHeight, obj.offsetTop)
    target = (0.5 + target) * obj.parentElement.offsetWidth
    targettop = targettop * window.innerHeight
    obj.timer = setInterval(function () {
        var stepx = (target - obj.offsetLeft) / steptime;
        stepx = stepx > 0 ? Math.ceil(stepx) : Math.floor(stepx);
        var stepy = (targettop - obj.offsetTop) / steptime;
        stepy = stepy > 0 ? Math.ceil(stepy) : Math.floor(stepy);
        if (obj.offsetLeft >= target) {
            clearInterval(obj.timer);

            if (callback) {
                callback();
            } else {

            }
        }
        obj.style.marginLeft = 0 + 'px';
        obj.style.left = obj.offsetLeft + stepx + 'px';
        obj.style.top = obj.offsetTop + stepy + 'px';
    }, 1000);
}
function larger() {//鼠标经过放大
    if (!isclueOpened && !isOpened2) {
        this.style.transform = 'scale(1.2)'
    }

}
function backsize() {//鼠标离开还原大小
    if (!isclueOpened && !isOpened2) {
        this.style.transform = 'scale(1)'
    }

}
function isfocus() {//点开线索放大
    if (!isclueOpened && !isOpened2) {
        this.style.transform = 'scale(3)'
        isclueOpened = true
    }
}
function scales(obj) {//放大事件
    obj.addEventListener('mouseenter', larger);
    obj.addEventListener('mouseleave', backsize);
}
function scalesli(obj) {//放大事件,对数组
    for (i = 0; i < obj.length; i++) {
        obj[i].addEventListener('mouseenter', larger);
        obj[i].addEventListener('mouseleave', backsize);
    }

}
function scalearray(obj, deg) {//箭头放大事件
    obj.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1) rotate(' + deg + 'deg)'
    });
    obj.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) rotate(' + deg + 'deg)'
    });
}
function cluefocus(obj) {//线索点开事件
    obj.addEventListener('click', isfocus)
}
function slideleft(obj, x) {//左滑背景事件
    obj.style.left = Math.min(0, x + 50) + '%';

}
function slideright(obj, x) {//右滑背景事件
    obj.style.left = Math.max(-85, x - 50) + '%';


}
function getk(ts) {//线索循环找到对应项
    for (k = 0; k < clue1.length; k++) {
        var father = ts.parentNode
        if (father == clue1[k]) {
            break
        }
    }
    return (k)
}
function getpagex(obj) {//找到左视口间距
    var tmp = obj.offsetLeft;
    var node = obj.offsetParent;
    while (node != null) {
        tmp += node.offsetLeft;
        node = node.offsetParent;
    }
    return tmp;
}
function getpagey(obj) {//找到上视口间距
    var tmp = obj.offsetTop;
    var node = obj.offsetParent;
    while (node != null) {
        tmp += node.offsetTop;
        node = node.offsetParent;
    }
    return tmp;
}
function distancex(x, y, m, n) {//条件判断表达式
    return (getpagex(x) > getpagex(y) - m && getpagex(x) < getpagex(y) + n)
}
function distx(x, y, m, n) {//条件判断表达式
    return (x.offsetLeft > y.offsetLeft - m && x.offsetLeft < y.offsetLeft + n)
}
function disty(x, y, m, n) {//条件判断表达式
    return (x.offsetTop > y.offsetTop - m && x.offsetTop < y.offsetTop + n)
}
function distancey(x, y, m, n) {//条件判断表达式
    return (getpagey(x) > getpagey(y) - m && getpagey(x) < getpagey(y) + n)
}
function boardstyle(i) {//简介牌子样式
    boards[i].style.borderStyle = 'solid'
    boards[i].style.borderColor = '#855a0a'
    boards[i].style.backgroundColor = '#654305'
    boards[i].firstElementChild.style.visibility = 'visible'
    boards[i].removeEventListener('click', isfocus)
    boards[i].removeEventListener('mouseenter', larger)
    boards[i].removeEventListener('mouseleave', backsize)
    isboard[i] = true
}
function picstyle(i) {//图片背景链接
    console.log('efdhuedkdfha')
    pictures[i].style.backgroundImage = 'url(../redimage/picture2.png)'
}
function blk() {//黑色马赛克事件
    if (isred) {
        for (i = 0; i < blks.length; i++) {
            // blks[i].style.visibility = 'visible'
            blks[i].style.opacity = '1'
        }
    } else {
        for (i = 0; i < blks.length; i++) {
            // blks[i].style.visibility = 'hidden'
            blks[i].style.opacity = '0'
        }
    }
    if (clear(isboard)) {
        this.removeEventListener('click', blk)
    }
}
function clear(obj) {//判断清空某线索
    for (i = 0; i < obj.length; i++) {
        if (!obj[i]) {
            return false
        }
    }
    return true
}
function rsize() {//调整视口自适应尺寸
    // var width=this.innerWidth
    for (i = 0; i < tes.length; i++) {
        tes[i].style.width = tes[i].offsetHeight + 'px'
    }
    for (i = 0; i < tos.length; i++) {
        tos[i].style.width = tos[i].offsetHeight + 'px'
    }
    left.style.borderWidth = window.innerWidth * 0.04 + 'px'
    right.style.borderWidth = window.innerWidth * 0.04 + 'px'
    yadang.style.height = yadang.offsetWidth * 3 + 'px'
    if (bg[0].offsetHeight != bg[0].offsetWidth) {
        bg[0].style.height = bg[0].offsetWidth + 'px'
        bg[1].style.height = bg[1].offsetWidth + 'px'
        scrclue1.style.height = scrclue1.offsetWidth + 'px'
        tele.style.height = 1.13 * scrclue1.offsetWidth + 'px'
        endall.style.height = 3 * window.innerHeight + 'px'
        endall.style.width = 1 / 3 * endall.offsetHeight + 'px'
        camera.style.height = 1.13 * scrclue1.offsetWidth + 'px'
        scrclue1.parentElement.style.height = scrclue1.parentElement.offsetWidth + 'px'
        scrclue2.style.height = scrclue2.offsetWidth + 'px'
        scrclue2.parentElement.style.height = scrclue2.parentElement.offsetWidth + 'px'
    }
    if (isred) {
        apple.style.top = 90 + '%'
    } else {
        apple.style.top = 60 + '%'
    }
}
function getRandomInt(min, max) {//随机整数
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function gettx(obj, tx) {//旁白文字

    for (i = 0; i < obj.length; i++) {
        obj[i].addEventListener('click', function () {
            pangbai.innerHTML = tx[getRandomInt(0, tx.length - 1)]
            if (!isvisible) {
                pangbai.style.transitionDelay = '0s'
                pangbai2.style.transitionDelay = '2s'
                pangbai.style.opacity = '1'
                pangbai2.style.opacity = '1'
                isvisible = true
                // console.log(1)
            } else {
                pangbai.style.transitionDelay = '2s'
                pangbai2.style.transitionDelay = '0s'
                pangbai.style.opacity = '0'
                pangbai2.style.opacity = '0'
                isvisible = false
                // console.log(2)
            }
        })
    }
}
function txobj(tx) {
    pangbai.innerHTML = tx[getRandomInt(0, tx.length - 1)]
    if (!isvisible) {
        pangbai.style.transitionDelay = '0s'
        pangbai2.style.transitionDelay = '2s'
        pangbai.style.opacity = '1'
        pangbai2.style.opacity = '1'
        isvisible = true
        // console.log(1)
    }
    else {
        pangbai.style.transitionDelay = '2s'
        pangbai2.style.transitionDelay = '0s'
        pangbai.style.opacity = '0'
        pangbai2.style.opacity = '0'
        isvisible = false
        // console.log(2)
    }
}
var isvisible = false
function gettxbycondition(obj, tx, e) {//提示语旁白文字
    for (i = 0; i < obj.length; i++) {
        obj[i].addEventListener(e, function () {
            // console.log(tombopen)
            if (tombopen && isred && !clear(isliter)) {
                // console.log('有了')
                pangbai.innerHTML = tx[getRandomInt(0, tx.length - 1)]
                if (!isvisible) {
                    pangbai.style.transitionDelay = '0s'
                    pangbai2.style.transitionDelay = '2s'
                    pangbai.style.opacity = '1'
                    pangbai2.style.opacity = '1'
                    isvisible = true
                    // console.log(1)
                } else {
                    pangbai.style.transitionDelay = '2s'
                    pangbai2.style.transitionDelay = '0s'
                    pangbai.style.opacity = '0'
                    pangbai2.style.opacity = '0'
                    isvisible = false
                    // console.log(2)
                }
            }

        })
    }
}
function end(o) {//结束
    o.style.transitionDelay = '1s';
    o.style.transitionDuration = '3s';
}
//#endregion
//#region ------------------------------------提取变量------------------------------------------------
var left = document.querySelector('.leftarray');
var right = document.querySelector('.rightarray');
var bg1 = document.querySelector('#bg1');
var bg2 = document.querySelector('#bg2');
var graybt = "rgb(117, 117, 117)";
var redbt = "rgb(255, 39, 39)";
var clue1 = document.querySelectorAll('.clue1');
var scrclue1 = document.querySelector('.scrclue1');
var scrclue2 = document.querySelector('.scrclue2');
var isred = true
var pictures = document.querySelectorAll('.picture');
var yadang = document.querySelector('.yadang');
var apple = document.querySelector('.apple');
var boards = document.querySelectorAll('.board')
var isclueOpened = false
var isOpened2 = false
var isCollect1 = [false, false, false, false]
var isboard = [false, false, false, false, false]
var tls = document.querySelectorAll('.tl');
var blks = document.querySelectorAll('.blk');
var grey = document.querySelectorAll('.grey')
var litters = document.querySelectorAll('.litter')
var tes = document.querySelectorAll('.te');
var tos = document.querySelectorAll('.to');
var isliter = [false, false, false, false]
var bg = document.querySelectorAll('.bg')
var tele = document.querySelector('.tele')
var pangbai = document.querySelector('.pangbai')
var pangbai2 = document.querySelector('.pangbai2')
var setting = document.querySelector('.setting')
var bgm = document.querySelector('.bgm')
var camera = document.querySelector('.camera')
var silent = false
var yinxiao = document.querySelector('.yinxiao')
var isend = false
var endall = document.querySelector('.endall')
var hei = document.querySelector('.hei')
//#endregion
//#region --------------------------------------------旁白---------------------------------------
var tx1 = ['It is not safe for children.<br>别让小孩看见。',//马赛克
    'Too exposed.<br>过于暴露。',
    'These are all necessary deletions.<br>必要的删减。',
    'This does not impair its artistry.<br>这不影响它的艺术性。',
    'Can this also called ART?<br>这也叫艺术？',
    'Can \' t read.<br>看不懂。',
    'Pixelate when it\'s time to.<br>该打码时就要打码。',
    'Am I still me.<br>我是否还是我。',//线索
    'I no longer have a name, just as Adam lost his apple.<br>我已不再拥有姓名，正如亚当没有了他的苹果。',
    'Does your body embarrass you like this?<br>你的身体竟这样令你难堪吗？',
    'Am I the ugly, twisted, and unbearable one... or you?<br>丑陋、扭曲、不堪的是我……还是你？',
    'May art no longer be pixelate.<br>愿艺术不再打码。',//名牌
    'David cannot be posted without pixelated.<br>不打码发不出来的大卫。',
    'I don\'t want to pixelate it either, but I have no choice.<br>我也不想打码，但那样发不出来。',
    'I desire for the whole me.<br>想要完整的我。']

var tx2 = ['The human body itself is the measuring stick for the beauty of all things.<br>人体自身是测量万物美的标尺。',//文字
    'From primitiveness, to confinement, to revival, to...<br>从原始，到禁锢，到复兴，到……',
    'I was born naked and it was you who was dirty.<br>我生来赤裸，肮脏的是你。']
var tx3 = ['In human civilization, I am constantly being castrated and awakened.<br>我在人类文明中，不断被阉割，被唤醒。',]
var tx4 = ['If..ask the apple?<br>或许……问问苹果？',
    'Which one is the truth, this red world or the opposide one?<br>这个充满红色的世界，与对面，究竟孰真孰假？',
    'red is right everywhere in this world.<br>红色在这个世界即为\"真理\"']
var tx5 = ['Upload,censorship,and...<br>上传，审查，然后……']
var tx6 = ['...come to death<br>……直到死亡']
var tx7 = ['When will Apple, trapped in a cyclical dream, wake up?<br>陷入循环之梦的苹果，何时能苏醒？']
//#endregion
//#region --------------------------------------------鼠标经过交互----------------------------------------------
scalearray(left, 90);
scalearray(right, -90);
scales(apple)
scalesli(blks)
scalesli(clue1);
scalesli(tls);
//-----------------------------------------鼠标点击显示文字-------------------------------------
gettx(blks, tx1)
gettx(clue1, tx1)
gettx(boards, tx1)
gettx(litters, tx2)
//--------------------------------------交互事件--------------------------------------------
left.addEventListener('click', function () {//按钮箭头注册事件
    var x = parseInt(bg1['offsetLeft'] / window.innerWidth);
    slideleft(bg1, x, 0); slideleft(bg2, x, -95);
    slideleft(scrclue1, x, 0); slideleft(scrclue2, x, 0);
    if (bg1['offsetLeft'] == 0) {
        left.style.borderTopColor = graybt
        right.style.borderTopColor = redbt

    } else {
        left.style.borderTopColor = redbt
        right.style.borderTopColor = redbt

    }
})
right.addEventListener('click', function () {//按钮箭头注册事件
    var x = parseInt(bg1['offsetLeft'] / window.innerWidth)
    slideright(bg1, x, 0); slideright(bg2, x, -95);
    slideright(scrclue1, x, 0); slideright(scrclue2, x, 0);
    if ((bg1['offsetLeft'] / bg1.parentElement.offsetWidth).toFixed(1) == -0.5) {
        left.style.borderTopColor = redbt
        right.style.borderTopColor = graybt

    } else {

        left.style.borderTopColor = redbt
        right.style.borderTopColor = redbt

    }

})

apple.addEventListener('click', function () {//苹果注册事件
    if ((apple['offsetTop'] / yadang.offsetHeight).toFixed(1) == 0.9) {
        isred = false
        if (clear(isliter)) {
            bg1.style.backgroundImage = 'url(../redimage/background4.png)'
            bg2.style.backgroundImage = 'url(../redimage/background4.png)'
        } else {
            bg1.style.backgroundImage = 'url(../redimage/background3.png)'
            bg2.style.backgroundImage = 'url(../redimage/background3.png)'
        }

        yadang.style.backgroundImage = 'url(../redimage/yadang.png)'
        apple.style.backgroundImage = 'url(../redimage/apple2.png)'
        apple.style.transform = 'rotate(0deg)'
        animatetop(apple, 0.6, 1)
        if (tombopen) {
            for (i = 0; i < clue1.length; i++) {
                clue1[i].style.visibility = 'visible'
                clue1[i].style.opacity = '1'
            }
        } else {

        }


    } else {
        isred = true
        if (clear(isliter)) {
            bg1.style.backgroundImage = 'url(../redimage/background3.png)'
            bg2.style.backgroundImage = 'url(../redimage/background3.png)'
        } else {
            bg1.style.backgroundImage = 'url(../redimage/background1.png)'
            bg2.style.backgroundImage = 'url(../redimage/background1.png)'
        }
        yadang.style.backgroundImage = 'url(../redimage/yadang2.png)'
        apple.style.backgroundImage = 'url(../redimage/apple1.png)'
        apple.style.transform = 'rotate(65deg)'
        animatetop(apple, 0.9, 3)
        if (tombopen) {
            for (i = 0; i < clue1.length; i++) {
                clue1[i].style.visibility = 'hidden'
                clue1[i].style.opacity = '0'
            }
        }


    }
})

setting.addEventListener('click', function () {//开关背景音乐
    if (!silent) {
        this.style.backgroundImage = 'url(../redimage/silent.png)'
        bgm.pause()
        silent = true
    } else {
        this.style.backgroundImage = 'url(../redimage/aloud.png)'
        bgm.play()
        silent = false
    }

})
opac(setting)
opac(left)
opac(right)
function opac(o) {
    o.addEventListener('mouseenter', function () {
        this.style.opacity = 1
    })
    o.addEventListener('mouseleave', function () {
        this.style.opacity = 0.3
    })
}

//#endregion
//#region ------------------------------------------游戏-------------------------------------------------------
for (i = 0; i < clue1.length; i++) {
    cluefocus(clue1[i], 3, 3);
}
document.addEventListener('click', function () {//未收集时点击交互状态下点击-还原名牌大小
    if (isclueOpened && isOpened2) {//打开并点过线索后
        for (i = 0; i < clue1.length; i++) {
            clue1[i].style.zIndex = ' 0'
            //console.log('ok')
        }
        for (i = 0; i < clue1.length; i++) {
            //还没有收集对应的或收集完毕
            clue1[i].style.transform = 'scale(1)'
            //console.log('maopao')
            isclueOpened = false//回到主界面
            isOpened2 = false
            // }

        }
        for (i = 0; i < boards.length; i++) {
            boards[i].style.transform = 'scale(1)'

        }
    } else if (isclueOpened) {//打开一层时点击进入到上面状态
        isOpened2 = true
    } else if (isred) {//红色画面时显示所有盒子
        for (i = 0; i < clue1.length; i++) {
            clue1[i].firstElementChild.style.visibility = 'visible'
            clue1[i].lastElementChild.style.visibility = 'hidden'
        }
    } else if (!isred && !isclueOpened) {//主界面上
        for (i = 0; i < clue1.length; i++) {
            clue1[i].firstElementChild.style.visibility = 'hidden'
            if (i <= 2 && isCollect1[i] || i > 2 && isCollect1[i - 2]) {
                clue1[i].lastElementChild.style.visibility = 'hidden'
                if (i == 1 || i == 2) {
                    clue1[i + 2].lastElementChild.style.visibility = 'hidden'
                    //  console.log(clue1[i + 2])
                } else if (i == 3 || i == 4) {
                    clue1[i - 2].lastElementChild.style.visibility = 'hidden'
                    //   console.log(clue1[i - 2])
                }
            }
            else {
                //  console.log([i, 'ddd'], isCollect1)
                clue1[i].lastElementChild.style.visibility = 'visible'
            }
        }
    }

})

for (i = 0; i < clue1.length; i++) {//盒子里文字绑定事件
    var clue1li = clue1[i].querySelector('span');
    clue1li.addEventListener('click', function () {
        if (!isred) {
            if (isclueOpened && !isCollect1[i]) {
                this.style.visibility = 'hidden';
                //console.log('aegrf')
                if (getk(this) + 1 == 2 || getk(this) + 1 == 3) {
                    // console.log(getk(this) + 1, clue1[getk(this) + 1 + 1].lastElementChild)
                    clue1[getk(this) + 1 + 1].lastElementChild.style.visibility = 'hidden';
                } else if (getk(this) + 1 == 4 || getk(this) + 1 == 5) {
                    clue1[getk(this) - 2].lastElementChild.style.visibility = 'hidden';
                }
            }
            if (isclueOpened) {
                if (getk(this) < 3) {
                    tls[getk(this)].style.visibility = 'visible'
                    isCollect1[getk(this)] = true
                } else {
                    tls[getk(this) - 2].style.visibility = 'visible'
                    isCollect1[getk(this) - 2] = true
                }
            }
        } //console.log(isCollect1)
    })

}

apple.addEventListener('click', blk)//黑色马赛克的可视性

for (i = 0; i < clue1.length; i++) {//点开后名牌不遮挡
    clue1[i].addEventListener('click', function () {
        if (isclueOpened && !isOpened2) {
            this.style.zIndex = '2'
        }
    })
}

document.addEventListener('click', function () {//简介牌可视性
    if (clear(isCollect1)) {//全部收集以后关闭盒子
        for (i = 0; i < clue1.length; i++) {
            clue1[i].style.visibility = 'hidden'
            clue1[i].firstElementChild.style.visibility = 'hidden'
        }
        for (j = 0; j < boards.length; j++) {//打开简介盒子
            boards[j].style.visibility = 'visible'
        }
    }
})



for (i = 0; i < boards.length; i++) {//拖动盒子到指定简介盒子处并显示简介
    scales(boards[i]);
    cluefocus(boards[i], 3, 3)
    if (i < tls.length) {
        tls[i].addEventListener('mousedown', function (event) {
            var thistl = this
            var xo = this.offsetLeft
            var yo = this.offsetTop
            var x = event.pageX - this.offsetLeft;
            var y = event.pageY - this.offsetTop;
            if (clear(isCollect1) && isclueOpened) {
                var a = 0
                for (i = 0; i < tls.length; i++) {
                    if (tls[i] == thistl) {
                        a = i
                        break
                    }
                }


                //console.log(a)
                document.addEventListener('mousemove', move)
                function move(e) {
                    thistl.style.left = e.pageX - x + 'px';
                    thistl.style.top = e.pageY - y + 'px';
                }
                document.addEventListener('mouseup', ups)
                function ups() {
                    //console.log(getpagex(thistl), getpagex(boards[a]))
                    if (clear(isboard)) {
                        document.removeEventListener('mouseup', ups)
                    }
                    if (a < 2) {
                        if (distancex(thistl, boards[a], 100, 200)
                            && distancey(thistl, boards[a], 50, 100)) {
                            thistl.style.visibility = 'hidden'
                            // picstyle(a)
                            boardstyle(a)
                            // console.log('success')
                            document.removeEventListener('mousemove', move)
                            switch (a) {
                                case 0:
                                    blks[0].style.visibility = 'hidden'
                                    blks[1].style.visibility = 'hidden'
                                    break;
                                default:
                                    blks[2].style.visibility = 'hidden'
                            }
                        } else {
                            thistl.style.left = xo + 'px'
                            thistl.style.top = yo + 'px'
                            document.removeEventListener('mousemove', move)
                            // console.log('defeat')
                        }
                    } else if (a == 2) {
                        if (distancex(thistl, boards[a], 100, 200) && distancey(thistl, boards[a], 50, 100)
                            || distancex(thistl, boards[a + 1], 100, 200) && distancey(thistl, boards[a + 1], 50, 100)) {
                            thistl.style.visibility = 'hidden'
                            boardstyle(a);
                            boardstyle(a + 1)
                            // picstyle(a)
                            // picstyle(a + 1)

                            // console.log('success')
                            document.removeEventListener('mousemove', move)
                            blks[3].style.visibility = 'hidden'
                            blks[4].style.visibility = 'hidden'
                            blks[5].style.visibility = 'hidden'
                            blks[6].style.visibility = 'hidden'
                        } else {
                            thistl.style.left = xo + 'px'
                            thistl.style.top = yo + 'px'
                            document.removeEventListener('mousemove', move)
                            // console.log('defeat')
                        }
                    } else {
                        if (distancex(thistl, boards[a + 1], 100, 200)
                            && distancey(thistl, boards[a + 1], 50, 100)) {
                            thistl.style.visibility = 'hidden'
                            boardstyle(a + 1)
                            // picstyle(a + 1)
                            // console.log('success')
                            document.removeEventListener('mousemove', move)
                            blks[7].style.visibility = 'hidden'
                            blks[8].style.visibility = 'hidden'
                        } else {
                            thistl.style.left = xo + 'px'
                            thistl.style.top = yo + 'px'
                            document.removeEventListener('mousemove', move)
                            // console.log('defeat')
                        }
                    }

                }
            }

        })
    }

}

document.addEventListener('click', function () {//简介盒子样式变化
    if (clear(isCollect1)) {
        for (i = 0; i < boards.length; i++) {
            if (!isboard[i]) {
                if (!isred) {
                    boards[i].style.visibility = 'hidden'
                    boards[i].style.borderStyle = 'none'
                    boards[i].style.backgroundColor = '#e26d6300'

                } else {

                    boards[i].style.borderStyle = 'dashed'
                    boards[i].style.visibility = 'visible'
                    boards[i].style.backgroundColor = '#ffe1e136'
                }
            } else {
                if (!isred) {

                    boards[i].style.visibility = 'hidden'
                    boards[i].style.borderStyle = 'none'
                    boards[i].style.backgroundColor = '#e26d6300'
                    boards[i].firstElementChild.style.visibility = 'hidden'
                } else {

                    boards[i].style.borderStyle = 'solid'
                    boards[i].style.borderColor = '#855a0a00'
                    boards[i].style.backgroundColor = '#65430500'
                    boards[i].firstElementChild.style.visibility = 'visible'
                }
            }
        }
    }
})

document.addEventListener('click', function () {//清空后出现字母
    if (clear(isboard)) {
        tombsecond = false
        for (i = 0; i < tes.length; i++) {
            tes[i].style.visibility = 'visible'
            tes[i].style.color = 'rgb(255, 0, 0)'
        }
    }
})


apple.addEventListener('click', function () {//字母样式变化
    if (clear(isboard)) {
        if (isred) {
            for (i = 0; i < litters.length; i++) {
                litters[i].style.visibility = 'hidden'
            }

        } else {
            for (i = 0; i < litters.length; i++) {
                // console.log('litter')
                litters[i].style.visibility = 'visible'
            }
        }
    } else {
        if (isred) {
            for (i = 0; i < blks.length; i++) {
                blks[i].style.visibility = 'visible'
            }

        } else {
            for (i = 0; i < blks.length; i++) {
                blks[i].style.visibility = 'hidden'
            }

        }
    }

})


apple.addEventListener('click', pictureapple)
function pictureapple() {//picture三个阶段
    var p = 0
    for (i = 0; i < isboard.length; i++) {
        if (i <= 2) {
            p = i
        } else {
            p = i - 1
        }
        // if (clear(isliter)) {
        //     apple.removeEventListener('click', pictureapple)
        // }
        if (isboard[i] && !isliter[p]) {
            if (isred) {
                pictures[i].style.backgroundImage = 'url(../redimage/tomb.png)'
                //console.log('2')
            } else {
                pictures[i].style.backgroundImage = 'url(../redimage/picture2.png)'
                //console.log('3')
            }

            //console.log('1')
        } else if (isliter[p] && !clear(isliter)) {
            if (isred) {
                pictures[i].style.backgroundImage = 'url(../redimage/picture2.png)'
                switch (p) {
                    case 0:
                    case 1:
                        boards[i].style.display = 'none'
                        break;
                    case 2:
                        boards[i].style.display = 'none'
                        boards[i + 1].style.display = 'none'
                        break;
                    default:
                        boards[i + 1].style.display = 'none'

                }
                //console.log('2')
            } else {
                pictures[i].style.backgroundImage = 'url(../redimage/picture1.png)'
                //console.log('3')
            }
        } else if (!tombopen) {
            if (isred) {
                pictures[i].style.backgroundImage = 'url(../redimage/picture1.png)'
                //console.log('4')
            } else {
                pictures[i].style.backgroundImage = 'url(../redimage/picture2.png)'
                // console.log('5')
            }
        } else {
            if (isred) {
                pictures[i].style.backgroundImage = 'url(../redimage/tomb.png)'
                //console.log('4')
            } else {
                pictures[i].style.backgroundImage = 'url(../redimage/picture2.png)'
                // console.log('5')
            }
        }
    }
}

for (i = 0; i < litters.length; i++) {//字母放大缩小，点击收集字母
    scales(litters[i])
    litters[i].addEventListener('click', function () {//点击字母事件
        this.style.display = 'none'
        var a = 0
        for (i = 0; i < litters.length; i++) {
            a = i
            if (this == litters[i]) {
                break
            }
        }
        switch (a) {
            case 0:
                tos[3].innerHTML = 'C'
                tos[3].style.color = 'rgb(255, 0, 0)'
                pictures[0].style.backgroundImage = 'url(../redimage/statue.gif)'
                isliter[0] = true
                break;
            case 1:
                tos[2].innerHTML = 'T'
                tos[2].style.color = 'rgb(255, 0, 0)'
                pictures[1].style.backgroundImage = 'url(../redimage/statue2.gif)'
                isliter[1] = true
                break;
            case 2:
                tos[1].innerHTML = 'A'
                tos[1].style.color = 'rgb(255, 0, 0)'
                pictures[2].style.backgroundImage = 'url(../redimage/statue3.gif)';
                pictures[3].style.backgroundImage = 'url(../redimage/statue3.gif)'
                isliter[2] = true
                break;
            default:
                tos[0].innerHTML = 'T'
                tos[0].style.color = 'rgb(255, 0, 0)'
                pictures[4].style.backgroundImage = 'url(../redimage/statue4.gif)'
                isliter[3] = true

        }



    })
}

document.addEventListener('click', function () {//点开后灰色蒙层
    if (isclueOpened) {
        for (i = 0; i < grey.length; i++) {
            grey[i].style.display = 'block'
            grey[i].style.backgroundColor = '#00000070'
        }

    } else {
        for (i = 0; i < grey.length; i++) {
            grey[i].style.display = 'none'
            grey[i].style.backgroundColor = '#00000000'
        }
    }
})

document.addEventListener('click', changetobg4)
function changetobg4() {
    if (clear(isliter)) {
        // console.log('这是bg4的切换')
        bg1.style.backgroundImage = 'url(../redimage/background4.gif)'
        bg2.style.backgroundImage = 'url(../redimage/background4.gif)'
        document.removeEventListener('click', changetobg4)
    }

}
document.addEventListener('click', lasttx)
function lasttx() {
    if (clear(isliter) && !isend) {
        txobj(tx7)
        // document.removeEventListener('click', lasttx)
    }
}
// apple.addEventListener('click', function () {
//     if (clear(isliter)) {
// if(isred){
//     bg1.style.backgroundImage = 'url(../redimage/background4.png)'
//     bg2.style.backgroundImage = 'url(../redimage/background4.png)'
// }
//     }
// })


apple.addEventListener('click', function () {//结束隐藏盒子
    if (clear(isliter)) {
        for (i = 0; i < bg.length; i++) {
            end(bg[i])
            bg[i].style.opacity = '0';
        }
        end(scrclue1);
        scrclue1.parentElement.style.opacity = '0';
        end(scrclue2);
        scrclue2.parentElement.style.opacity = '0';
        end(yadang)
        end(left)
        end(right)
        left.style.display = 'none'
        right.style.display = 'none'
        yadang.style.backgroundImage = 'none'
        for (i = 0; i < tos.length; i++) {
            end(tos[i])
            end(tes[i])
            tos[i].style.backgroundColor = 'black';
            tes[i].style.backgroundColor = 'black'
        }
        isend = true
    }
})
var endcs = false
apple.addEventListener('click', function () {//结束工具箱动画
    if (isend) {
        gettx(apple, tx3)
        apple.style.transitionDelay = '5s';
        apple.style.transitionDuration = '3s';
        apple.style.opacity = '0';
        toolleft(tos[0], 0.2, 0.5, 1);//T
        toolleft(tes[0], -0.2, 0.5, 1);//A
        toolleft(tes[1], -0.12, 0.5, 1);//S
        toolleft(tos[1], 0.12, 0.5, 1);//A
        toolleft(tes[2], 0.04, 0.5, 1);//R
        toolleft(tos[2], -0.04, 0.5, 1);//T
        toolleft(tos[3], -0.28, 0.5, 1);//C
        toolleft(tes[3], 0.28, 0.5, 1);//E
        endcs = true
    }
})
for (i = 0; i < tes.length; i++) {
    tes[i].addEventListener('click', endgame)
    tos[i].addEventListener('click', endgame)
}
function endgame() {
    if (endcs) {
        for (i = 0; i < tes.length; i++) {
            tes[i].style.opacity = 0
            tos[i].style.opacity = 0
            tes[i].style.transitionDelay = '1s';
            tos[i].style.transitionDelay = '1s';
        }
        // endall.style.display = 'block'
        animateend(endall, -2, 500)
    }
}
document.addEventListener('click', function () {
    if (endall.offsetTop == -2 * window.innerHeight) {
        endall.style.transitionDuration = '2s';
        endall.style.opacity = 0
    }
})
// window.addEventListener('load', function () {
//     animateend(endall, -2, 500)
// })
//#endregion
//#region -------------------------------自适应窗口-----------------------------------
window.addEventListener('resize', rsize)
window.addEventListener('load', rsize)
//#endregion
//#region chapter1
var chapter1 = true
// scalesli(pictures, 1.1)
window.addEventListener('load', function () {//第一章出现时
    for (i = 0; i < pictures.length - 1; i++) {
        pictures[i].style.backgroundImage = 'none'
    }
    pictures[4].style.backgroundImage = 'url(../redimage/picture4.png)'
    for (i = 0; i < pingtus.length; i++) {
        pingtus[i].style.display = 'block'
        positionpt[i] = [pingtus[i].offsetLeft, pingtus[i].offsetTop]
    }
    yadang.style.visibility = 'hidden'
    yadang.style.opacity = '0'
    for (i = 0; i < blks.length; i++) {
        blks[i].style.visibility = 'hidden'
        blks[i].style.opacity = '0'
    }
    for (i = 0; i < clue1.length; i++) {
        clue1[i].style.visibility = 'hidden'
        clue1[i].style.opacity = '0'
    }
    // console.log(positionpt[1][0])
})
window.addEventListener('resize', function () {
    if (!isopentomb[0]) {
        for (i = 0; i < pingtus.length; i++) {
            positionpt[i] = [pingtus[i].offsetLeft, pingtus[i].offsetTop]
        }
    }
})
var positionpt = []
var pingtus = pictures[0].querySelectorAll('span')
var daweis = pictures[1].querySelectorAll('span')
var clays = pictures[2].querySelectorAll('span')
var clays2 = pictures[3].querySelectorAll('span')
var huatu = pictures[4].querySelector('span')
for (i = 0; i < pingtus.length; i++) {//拖动盒子到指定简介盒子处并显示简介
    pingtus[i].addEventListener('mousedown', pingtufunc)
}
var isopentomb = [false, false, false, false]
function pingtufunc(event) {//第一张 拼图

    var a = 0
    for (i = 0; i < pingtus.length; i++) {
        if (pingtus[i] == thispt) {
            a = i
            break
        }
    }
    var thispt = this
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    // console.log(a + '已经进入未重复')


    document.addEventListener('mousemove', move)
    function move(e) {
        thispt.style.left = e.pageX - x + 'px';
        thispt.style.top = e.pageY - y + 'px';
        // console.log(a + '在移动')

    }
    document.addEventListener('mouseup', ups)
    function ups() {
        // console.log('触发了' + a + 'up事件')
        var xi = -1, yi = -1
        for (i = 0; i < pingtus.length; i++) {
            // xm = xo
            // ym = yo
            if (i != a) {
                if (distx(pingtus[a], pingtus[i], 50, 50)
                    && disty(pingtus[a], pingtus[i], 50, 50)) {
                    xi = 1
                    yi = 1
                    // console.log('我现在点击了' + a + '并且与' + i + '交换', ',新的' + a + '的坐标为' + xo, yo, ';新的' + i + '的坐标为' + xi, yi)
                    break
                }
            }
        }
        document.removeEventListener('mousemove', move)
        if (xi !== -1 && yi !== -1) {
            // console.log('交换成功')
            // pingtus[i].removeEventListener('mousedown', pingtufunc)
            pingtus[i].style.left = positionpt[a][0] + 'px'
            pingtus[i].style.top = positionpt[a][1] + 'px'
            pingtus[a].style.left = positionpt[i][0] + 'px'
            pingtus[a].style.top = positionpt[i][1] + 'px'
            midx = positionpt[a][0]
            midy = positionpt[a][1]
            positionpt[a][0] = positionpt[i][0]
            positionpt[a][1] = positionpt[i][1]
            positionpt[i][0] = midx
            positionpt[i][1] = midy
        } else {
            // console.log('交换失败')
            for (i = 0; i < pingtus.length; i++) {
                pingtus[i].style.left = positionpt[i][0] + 'px'
                pingtus[i].style.top = positionpt[i][1] + 'px'
            }
        }
        if (pingtus[1].offsetLeft < pingtus[2].offsetLeft &&
            pingtus[0].offsetLeft < pingtus[3].offsetLeft &&
            pingtus[1].offsetTop < pingtus[0].offsetTop &&
            pingtus[2].offsetTop < pingtus[3].offsetTop) {
            // console.log('success')
            isopentomb[0] = true
            for (i = 0; i < pingtus.length; i++) {
                pingtus[i].style.transitionDuration = '1s'
                pingtus[i].style.opacity = '0'
            }
            pictures[0].style.backgroundImage = 'url(../redimage/picture2.png)'
            this.removeEventListener
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mousedown', pingtufunc)
        }
        document.removeEventListener('mouseup', ups)
        event.stopPropagation()

    }
    // console.log(distx(thispt, pingtus[1], 20, 20), disty(thispt, pingtus[1], 20, 20))

}
document.addEventListener('mousedown', function (e) {
    for (i = 0; i < pingtus.length; i++) {
        for (j = 0; j < pingtus.length; j++) {
            if (j !== i && distx(pingtus[j], pingtus[i], 20, 20) && disty(pingtus[j], pingtus[i], 20, 20)) {
                pingtus[0].style.left = 0
                pingtus[0].style.top = 0
                pingtus[1].style.left = 50 + '%'
                pingtus[1].style.top = 0
                pingtus[2].style.left = 0
                pingtus[2].style.top = 50 + '%'
                pingtus[3].style.left = 50 + '%'
                pingtus[3].style.top = 50 + '%'
                // e.stopPropagation()
            }
        }
    }
})
var rottime = 0
daweis[1].addEventListener('click', function () {//第二张 旋转
    switch (rottime) {
        case 0:
            this.style.transform = 'rotate(-15deg)'
            rottime = 1
            break;
        case 1:
            this.style.transform = 'rotate(-25deg)'
            rottime = 2
            break;
        case 2:
            this.style.transform = 'rotate(10deg)'
            rottime = 3
            break;
        case 3:
            this.style.transform = 'rotate(-35deg)'
            rottime = 4
            break;
        case 4:
            this.style.transform = 'rotate(0deg)'
            rottime = 5
            break;
        default:
            this.style.opacity = '0'
            daweis[0].style.opacity = '0'
            pictures[1].style.backgroundImage = 'url(../redimage/picture2.png)'
            isopentomb[1] = true
    }
})
var claytime = 0

for (i = 0; i < clays.length; i++) {
    clays[i].addEventListener('click', clay)
    clays2[i].addEventListener('click', clay)
}
function clay() {//第三张 陶土
    switch (claytime) {
        case 0:
            clays[0].style.backgroundImage = 'url(../redimage/picture4.png)'
            clays2[0].style.backgroundImage = 'url(../redimage/picture4.png)'
            claytime = 1
            break;
        case 1:
            clays[1].style.backgroundImage = 'url(../redimage/picture4.png)'
            clays2[1].style.backgroundImage = 'url(../redimage/picture4.png)'
            claytime = 2
            break;
        case 2:
            clays[2].style.backgroundImage = 'url(../redimage/picture4.png)'
            clays2[2].style.backgroundImage = 'url(../redimage/picture4.png)'
            claytime = 3
            break;
        default:
            for (i = 0; i < clays.length; i++) {
                clays[i].style.opacity = '0'
                clays2[i].style.opacity = '0'
            }
            pictures[2].style.backgroundImage = 'url(../redimage/picture2.png)'
            pictures[3].style.backgroundImage = 'url(../redimage/picture2.png)'
            isopentomb[2] = true
    }
}
var huatutime = 0
huatu.addEventListener('click', function () {//第四张 旋转
    switch (huatutime) {
        case 0:
            huatu.style.transform = 'rotate(180deg)'
            huatutime = 1
            break;
        case 1:
            huatu.style.transform = 'rotate(270deg)'
            huatutime = 2
            break;
        case 2:
            huatu.style.transform = 'rotate(360deg)'
            huatutime = 3
            break;
        default:
            huatu.style.display = 'none'
            pictures[4].style.backgroundImage = 'url(../redimage/picture2.png)'
            isopentomb[3] = true
    }
})
document.addEventListener('click', first)
function first() {//清空四个线索后显示picture2
    if (clear(isopentomb)) {
        // camera.style.display = 'block'
        camera.style.visibility = 'visible'
        camera.style.opacity = '1'
        for (i = 0; i < pictures.length; i++) {
            pictures[i].style.backgroundImage = 'url(../redimage/picture2.png)'
        }
        for (i = 0; i < pingtus.length; i++) {
            pingtus[i].style.display = 'none'
        }
        for (i = 0; i < daweis.length; i++) {
            daweis[i].style.display = 'none'
        }
        for (i = 0; i < clays.length; i++) {
            clays[i].style.display = 'none'
            clays2[i].style.display = 'none'
        }
        // console.log('还在')
        document.removeEventListener('click', first)
    }

}
var uploads = camera.querySelectorAll('div')
var ispcture1 = false
for (i = 0; i < uploads.length; i++) {//uploads点击后上传
    uploads[i].addEventListener('mouseenter', function () {
        for (i = 0; i < uploads.length; i++) {
            uploads[i].style.backgroundImage = 'url(../redimage/UPLOAD2.png)'
        }
    })
    uploads[i].addEventListener('mouseleave', function () {
        for (i = 0; i < uploads.length; i++) {
            uploads[i].style.backgroundImage = 'url(../redimage/UPLOAD1.png)'
        }
    })
    uploads[i].addEventListener('click', function () {
        camera.style.display = 'none'
        for (i = 0; i < blks.length; i++) {
            blks[i].style.visibility = 'visible'
            blks[i].style.opacity = '1'
        }
        for (i = 0; i < pictures.length; i++) {
            pictures[i].style.backgroundImage = 'url(../redimage/picture1.png)'
        }
        ispcture1 = true
        // yadang.style.visibility = 'visible'
        // yadang.style.opacity = '1'
        // for (i = 0; i < clue1.length; i++) {
        //     clue1[i].style.visibility = 'visible'
        //     clue1[i].style.opacity = '1'
        // }

    })
}
for (i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', istomb)
    pictures[i].addEventListener('mouseenter', tombchange)
    pictures[i].addEventListener('mouseleave', tombchangeback)
    pictures[i].addEventListener('click', tombtx)
}
var tombopen = false
var tombsecond = true
function tombtx() {
    if (ispcture1) {
        txobj(tx6)
        for (i = 0; i < pictures.length; i++) {
            pictures[i].removeEventListener('click', tombtx)
        }
    }
}

function istomb() {
    if (ispcture1) {
        tombopen = true
        for (i = 0; i < blks.length; i++) {
            blks[i].style.visibility = 'hidden'
            blks[i].style.opacity = '0'
        }
        yadang.style.visibility = 'visible'
        yadang.style.opacity = '1'

        for (i = 0; i < pictures.length; i++) {
            pictures[i].style.backgroundImage = 'url(../redimage/tomb.png)'
            pictures[i].removeEventListener('click', istomb)
        }
        // for (i = 0; i < clue1.length; i++) {
        //     clue1[i].style.visibility = 'visible'
        //     clue1[i].style.opacity = '1'
        // }
    }
}
function tombchange() {
    if (tombsecond && tombopen && isred && !clear(isCollect1)) {
        this.style.backgroundImage = 'url(../redimage/picture1.png)'
    } else if (tombsecond && tombopen && !isred && clear(isCollect1)) {
        this.style.backgroundImage = 'url(../redimage/picture1.png)'
    }
}
function tombchangeback() {
    if (tombsecond && tombopen && isred && !clear(isCollect1)) {
        this.style.backgroundImage = 'url(../redimage/tomb.png)'
    } else if (tombsecond && tombopen && !isred && clear(isCollect1)) {
        this.style.backgroundImage = 'url(../redimage/picture2.png)'
    }
}
gettxbycondition(pictures, tx4, 'mouseenter')
gettx(uploads, tx5)
//#endregion
window.onload = function () {
    hei.innerHTML = 'click to start'
}
hei.addEventListener('click', function () {
    hei.style.display = 'none'
})


