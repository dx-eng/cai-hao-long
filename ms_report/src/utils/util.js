import {validatenull} from './validate'
import axios from 'axios'
import {baseUrl} from '@/config/env';
//表单序列化
export const serialize = data => {
    let list = [];
    Object.keys(data).forEach(ele => {
        list.push(`${ele}=${data[ele]}`)
    })
    return list.join('&');
};
export const getObjType = obj => {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    if (obj instanceof Element) {
        return 'element';
    }
    return map[toString.call(obj)];
};
/**
 * 对象深拷贝
 */
export const deepClone = data => {
    var type = getObjType(data);
    var obj;
    if (type === 'array') {
        obj = [];
    } else if (type === 'object') {
        obj = {};
    } else {
        //不再具有下一层次
        return data;
    }
    if (type === 'array') {
        for (var i = 0, len = data.length; i < len; i++) {
            obj.push(deepClone(data[i]));
        }
    } else if (type === 'object') {
        for (var key in data) {
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
};
/**
 * 设置灰度模式
 */
export const toggleGrayMode = (status) => {
    if (status) {
        document.body.className = document.body.className + ' grayMode';
    } else {
        document.body.className = document.body.className.replace(' grayMode', '');
    }
};
/**
 * 设置主题
 */
export const setTheme = (name) => {
    document.body.className = name;
}

/**
 * 加密处理
 */
export const encryption = (params) => {
    let {
        data,
        type,
        param,
        key
    } = params;
    let result = JSON.parse(JSON.stringify(data));
    if (type == 'Base64') {
        param.forEach(ele => {
            result[ele] = btoa(result[ele]);
        })
    } else if (type == 'Aes') {
        param.forEach(ele => {
            result[ele] = window.CryptoJS.AES.encrypt(result[ele], key).toString();
        })

    }
    return result;
};


/**
 * 浏览器判断是否全屏
 */
export const fullscreenToggel = () => {
    if (fullscreenEnable()) {
        exitFullScreen();
    } else {
        reqFullScreen();
    }
};
/**
 * esc监听全屏
 */
export const listenfullscreen = (callback) => {
    function listen() {
        callback()
    }

    document.addEventListener("fullscreenchange", function () {
        listen();
    });
    document.addEventListener("mozfullscreenchange", function () {
        listen();
    });
    document.addEventListener("webkitfullscreenchange", function () {
        listen();
    });
    document.addEventListener("msfullscreenchange", function () {
        listen();
    });
};
/**
 * 浏览器判断是否全屏
 */
export const fullscreenEnable = () => {
    var isFullscreen = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
    return isFullscreen;
}

/**
 * 浏览器全屏
 */
export const reqFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    }
};
/**
 * 浏览器退出全屏
 */
export const exitFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
        document.exitFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.mozCancelFullScreen();
    }
};
/**
 * 递归寻找子类的父类
 */

export const findParent = (menu, id) => {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].children.length != 0) {
            for (let j = 0; j < menu[i].children.length; j++) {
                if (menu[i].children[j].id == id) {
                    return menu[i];
                } else {
                    if (menu[i].children[j].children.length != 0) {
                        return findParent(menu[i].children[j].children, id);
                    }
                }
            }
        }
    }
};
/**
 * 判断2个对象属性和值是否相等
 */

/**
 * 动态插入css
 */

export const loadStyle = url => {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    const head = document.getElementsByTagName('head')[0];
    // head.appendChild(link);
};
/**
 * 判断路由是否相等
 */
export const diff = (obj1, obj2) => {
    delete obj1.close;
    var o1 = obj1 instanceof Object;
    var o2 = obj2 instanceof Object;
    if (!o1 || !o2) { /*  判断不是对象  */
        return obj1 === obj2;
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
        //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
    }

    for (var attr in obj1) {
        var t1 = obj1[attr] instanceof Object;
        var t2 = obj2[attr] instanceof Object;
        if (t1 && t2) {
            return diff(obj1[attr], obj2[attr]);
        } else if (obj1[attr] !== obj2[attr]) {
            return false;
        }
    }
    return true;
}
/**
 * 根据字典的value显示label
 */
export const findByvalue = (dic, value) => {
    let result = '';
    if (validatenull(dic)) return value;
    if (typeof (value) == 'string' || typeof (value) == 'number' || typeof (value) == 'boolean') {
        let index = 0;
        index = findArray(dic, value);
        if (index != -1) {
            result = dic[index].label;
        } else {
            result = value;
        }
    } else if (value instanceof Array) {
        result = [];
        let index = 0;
        value.forEach(ele => {
            index = findArray(dic, ele);
            if (index != -1) {
                result.push(dic[index].label);
            } else {
                result.push(value);
            }
        });
        result = result.toString();
    }
    return result;
};
/**
 * 根据字典的value查找对应的index
 */
export const findArray = (dic, value) => {
    for (let i = 0; i < dic.length; i++) {
        if (dic[i].value == value) {
            return i;
        }
    }
    return -1;
};
/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
    let random = '';
    random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, len ? len : 4);
    if (date) random = random + Date.now();
    return random;
};
/**
 * 打开小窗口
 */
export const openWindow = (url, title, w, h) => {
    // Fixes dual-screen position                            Most browsers       Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

    const left = ((width / 2) - (w / 2)) + dualScreenLeft
    const top = ((height / 2) - (h / 2)) + dualScreenTop
    const newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus()
    }
};

/**
 * excel 导出
 *       auth by clj. on 2019.11.28
 *       url, param, fileName
 */

export const exportExcel = (u,p, f) => {
    // p.parameter.gender=1;
    // console.log(u,p);
    let params = {parameter:p};
    // console.log(u,p);
    axios.post(u, params, {
        responseType: 'blob'
    }).then(res => {
        let blob = new Blob([res.data], { type: 'application/vnd.ms-excel','Content-Type': 'application/vnd.ms-excel'});
                                                                    //Content-Type: application/vnd.ms-excel
        let downloadElement = document.createElement('a');
        let href = window.URL.createObjectURL(blob); //创建下载的链接
        downloadElement.href = href;
        downloadElement.download = f || '未命名.xls'; //下载后文件名
        document.body.appendChild(downloadElement);
        downloadElement.click(); //点击下载
        document.body.removeChild(downloadElement); //下载完成移除元素
        window.URL.revokeObjectURL(href); //释放掉blob对象
    })
};

/**
 * 工具类
 *              -- Author by Dio Zhu. on 2017.2.9
 *
 * 修改了以前的对象的方式，以前各方法作为对象属性，问题在打包（build）后，会把整个对象打进去。
 * 现改用es6的模块方式，前端引用方法：
 *      import * as utils from '../utils.js';
 *      utils.formatTime();
 * 打包时webpack的tree-shaking会只处理被引用的方法；
 *              -- Author by Dio Zhu. on 2017.6.26
 */
import Vue from 'vue';

// const isServer = Vue.prototype.$isServer;
// const SPECIAL_CHARS_REGEXP = /((.))/g;
// const MOZ_HACK_REGEXP = /^moz([A-Z])/;
// const ieVersion = isServer ? 0 : Number(document.documentMode);
/* istanbul ignore next */
// const trim = function (string) {
//     return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
// };
// /* istanbul ignore next */
// const camelCase = function (name) {
//     return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
//         return offset ? letter.toUpperCase() : letter;
//     }).replace(MOZ_HACK_REGEXP, 'Moz$1');
// };

// /** ==================== 浏览器相关 ==================== */
export function getQueryStringByName(name) {
    var result = document.location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
    if (result == null || result.length < 1) {
        return '';
    }
    return result[1];
}

// export function getCurrentPath(opts) {
//     // var rtn = document.location.hash;
//     // if (opts && opts.pathOnly) {
//     //     rtn = rtn.split('?')[0].replace(/#!\//g, '');
//     // }
//     // return rtn;
//     return document.location.pathname;
// };

export function getCookie(name) {
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)'),
        arr = document.cookie.match(reg) || null;
    if (arr && arr.length > 2) return unescape(arr[2]);
    return null;
}

export function setCookie(key, value, expires) {
    let exdate = new Date();
    exdate.setTime(exdate.getTime() + expires);
    document.cookie = key + '=' + escape(value) + (expires == null ? '' : ';expires=' + exdate.toGMTString());
}

export function delCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
}

export let cookie = {
    set: function(obj) {
        var ck = [];
        ck.push(obj.name + '=');
        if (obj.value) {
            ck.push(!!obj.encode ? obj.value : encodeURIComponent(obj.value)); //eslint-disable-line
            // 是否encodeURIComponent
        }
        if (obj.expires) {
            var d = new Date();
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setTime(d.getTime() + obj.expires * 86400000);
            // d.setTime(d.getTime() + obj.expires);
            // // 24 * 60 * 60 * 1000
            ck.push(';expires=' + d.toGMTString());
        }
        if (obj.domain) {
            ck.push(';domain=' + obj.domain);
        }
        ck.push(';path=' + (obj.path || '/'));
        if (obj.secure) {
            ck.push(';secure');
        }
        document.cookie = ck.join('');
    },
    get: function(name, encode) {
        var m = document.cookie.match(new RegExp('(^| )' + name + '=([^;])*', 'gi')),
            v = !m ? '' : m[0].split(name + '=')[1];
        return !!encode ? v : decodeURIComponent(v); //eslint-disable-line
    }
};

export function getLocalStorage(key = '') {
    let storage = window.localStorage,
        // _uid = 'net.dongyin.admins';
        _uid =
            key ||
            window.location.host
            .split('.')
            .reverse()
            .join('.');

    if (!storage) {
        console.error('This browser does NOT support localStorage!');
        return;
    }

    if (!storage[_uid]) {
        var obj = {};
        storage[_uid] = JSON.stringify(obj);
    }

    return {
        set: function(key, value) {
            // 设置某个已保存的键值
            var obj = JSON.parse(storage.getItem(_uid));
            obj[key] = value;
            storage[_uid] = JSON.stringify(obj);
        },
        get: function(key) {
            // 获取某个已保存的键值
            if (!this.has()) return;
            var obj = JSON.parse(storage.getItem(_uid));
            if (obj.hasOwnProperty(key)) {
                return obj[key];
            }
            return null;
        },
        has: function() {
            var v = storage.getItem(_uid);
            var obj = JSON.parse(v);
            if (typeof obj !== 'object' || obj == null) {
                return false;
            }
            return true;
        },
        remove: function(key) {
            storage.removeItem(key);
        },
        clear: function() {
            storage.clear();
        }
    };
}

export function getSessionStorage(key = '') {
    let storage = window.sessionStorage,
        // _uid = 'cn.hy-sport.comb';
        _uid =
            key ||
            window.location.host
            .split('.')
            .reverse()
            .join('.');

    if (!storage) {
        console.error('This browser does NOT support sessionStorage!');
        return;
    }

    if (!storage[_uid]) {
        var obj = {};
        storage[_uid] = JSON.stringify(obj);
    }

    return {
        set: function(key, value) {
            // 设置某个已保存的键值
            var obj = JSON.parse(storage.getItem(_uid));
            obj[key] = value;
            storage[_uid] = JSON.stringify(obj);
        },
        get: function(key) {
            // 获取某个已保存的键值
            if (!this.has()) return;
            var obj = JSON.parse(storage.getItem(_uid));
            if (obj.hasOwnProperty(key)) {
                return obj[key];
            }
            return null;
        },
        has: function() {
            var v = storage.getItem(_uid);
            var obj = JSON.parse(v);
            if (typeof obj !== 'object' || obj == null) {
                return false;
            }
            return true;
        },
        remove: function(key) {
            storage.removeItem(key);
        },
        clear: function() {
            storage.clear();
        }
    };
}
//
// /* istanbul ignore next */
// export function hasClass(el, cls) {
//     if (!el || !cls) return false;
//     if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
//     if (el.classList) {
//         return el.classList.contains(cls);
//     } else {
//         return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
//     }
// };
//
// /* istanbul ignore next */
// export function addClass(el, cls) {
//     if (!el) return;
//     var curClass = el.className,
//         classes = (cls || '').split(' ');
//
//     for (let i = 0, j = classes.length; i < j; i++) {
//         let clsName = classes[i];
//         if (!clsName) continue;
//
//         if (el.classList) {
//             el.classList.add(clsName);
//         } else {
//             if (!hasClass(el, clsName)) {
//                 curClass += ' ' + clsName;
//             }
//         }
//     }
//     if (!el.classList) {
//         el.className = curClass;
//     }
// };
//
// /* istanbul ignore next */
// export function removeClass(el, cls) {
//     if (!el || !cls) return;
//     var classes = cls.split(' '),
//         curClass = ' ' + el.className + ' ';
//
//     for (let i = 0, j = classes.length; i < j; i++) {
//         let clsName = classes[i];
//         if (!clsName) continue;
//
//         if (el.classList) {
//             el.classList.remove(clsName);
//         } else {
//             if (hasClass(el, clsName)) {
//                 curClass = curClass.replace(' ' + clsName + ' ', ' ');
//             }
//         }
//     }
//     if (!el.classList) {
//         el.className = trim(curClass);
//     }
// };
//
// /* istanbul ignore next */
// export const getStyle = ieVersion < 9 ? function (element, styleName) {
//     if (isServer) return;
//     if (!element || !styleName) return null;
//     styleName = camelCase(styleName);
//     if (styleName === 'float') {
//         styleName = 'styleFloat';
//     }
//     try {
//         switch (styleName) {
//             case 'opacity':
//                 try {
//                     return element.filters.item('alpha').opacity / 100;
//                 } catch (e) {
//                     return 1.0;
//                 }
//             default:
//                 return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
//         }
//     } catch (e) {
//         return element.style[styleName];
//     }
// } : function (element, styleName) {
//     if (isServer) return;
//     if (!element || !styleName) return null;
//     styleName = camelCase(styleName);
//     if (styleName === 'float') {
//         styleName = 'cssFloat';
//     }
//     try {
//         var computed = document.defaultView.getComputedStyle(element, '');
//         return element.style[styleName] || computed ? computed[styleName] : null;
//     } catch (e) {
//         return element.style[styleName];
//     }
// };
//
// /* istanbul ignore next */
// export function setStyle(element, styleName, value) {
//     if (!element || !styleName) return;
//
//     if (typeof styleName === 'object') {
//         for (var prop in styleName) {
//             if (styleName.hasOwnProperty(prop)) {
//                 setStyle(element, prop, styleName[prop]);
//             }
//         }
//     } else {
//         styleName = camelCase(styleName);
//         if (styleName === 'opacity' && ieVersion < 9) {
//             element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
//         } else {
//             element.style[styleName] = value;
//         }
//     }
// };

export function getModal({ clickFunc } = {}) {
    if (Vue.prototype.$isServer) return;
    let modalDom = window.document.getElementsByClassName('modal')[0];
    if (!modalDom) {
        modalDom = document.createElement('div');
        modalDom.setAttribute('class', 'v-modal');
        modalDom.addEventListener('touchmove', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });
        modalDom.addEventListener('click', function() {
            console.log('【utils】getModal.handleClick: ');
            if (clickFunc) clickFunc();
        });
        document.body.appendChild(modalDom);
    }
    return modalDom;
}

export function removeModal() {
    if (Vue.prototype.$isServer) return;
    let modalDom = window.document.getElementsByClassName('v-modal')[0];
    if (modalDom) document.body.removeChild(modalDom);
}

// /** ==================== 事件扩展 ==================== */

/**
 * chrome为保证滑动性能添加了Passive支持，而支持度并不高。。。
 *              -- Author by Dio Zhu. on 2017.12.14
 */
export function supportsPassive() {
    // Test via a getter in the options object to see
    // if the passive property is accessed
    let supportsPassive = false;
    try {
        let opts = Object.defineProperty({}, 'passive', {
            get: function() {
                supportsPassive = true;
                return supportsPassive;
            }
        });
        window.addEventListener('test', null, opts);
    } catch (e) {
        //
    }
    return supportsPassive;
}

export function throttle(fn, delay) {
    // 节流
    let now, lastExec, timer, context, args; //eslint-disable-line

    let execute = function() {
        fn.apply(context, args);
        lastExec = now;
    };

    return function() {
        context = this;
        args = arguments;

        now = Date.now();

        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        if (lastExec) {
            let diff = delay - (now - lastExec);
            if (diff < 0) {
                execute();
            } else {
                timer = setTimeout(() => {
                    execute();
                }, diff);
            }
        } else {
            execute();
        }
    };
}

/*
 * 图片处理*
 * 添加阿里云oss
 *              -- mod by Dio sunleqing. on 2018.5.19
 */
export function thumb(url, { width = 750, height = 0 } = {}) {
    let str = url;
    // console.log('utils.thumb: ', url, width, height);
    // return url + '!/fw/100';
    if (/upaiyun.com/.test(url)) {
        // 又拍云缩略图
        if (width && height) str += '!/both/' + width + 'x' + height;
        else if (width) str += '!/fw/' + width;
        else if (height) str += '!/fh/' + height;
    } else if (/oss.dongyin.net|img-yp-cdn.dongyin.net/.test(url)) {
        // 阿里云缩略图
        if (width && height) str += '?x-oss-process=image/resize,m_fill,h_' + height + ',w_' + width;
        else if (width) str += '?x-oss-process=image/resize,w_' + width;
        else if (height) str += '?x-oss-process=image/resize,h_' + height;
    }
    return str;
}

/** ==================== 图片相关 ==================== */
/**
 * 头像、七牛的缩略图
 *              -- Author by Dio Zhu. on 2017.5.2
 */
export function getThumbnail(url) {
    if (!url) {
        return 'http://static1.systoon.com/share/img/185x185.png';
        // return '../static/images/default-avatar.png';
    }
    if (/qiniu.toon.mobi/.test(url)) {
        // 七牛缩略图
        return url + '?imageView2/0/w/750';
    }
    // 静态服务器头像
    if (url.indexOf('http://img.icon.systoon.com') >= 0 || url.indexOf('http://static1.systoon.com') >= 0) {
        return url;
    }
    if (url.match(/_/g) && url.match(/_/g).length > 1) return url; // 已经转过的
    let w = 80,
        h = 80,
        q = 100,
        path = url.substr(0, url.lastIndexOf('.')),
        mimeType = url.substring(url.lastIndexOf('.'), url.length),
        suffix = '_' + w + '_' + h + '_' + q + '_1';
    if (mimeType.length >= 4) {
        // 会有没有后缀，直接显示地址的头像：feedId：s_1948762391184096，avatar："http://scloud.toon.mobi/f/Zs9xtlKKvwI6-iy1CGlAK5UFxlwMtlBU-U4tt0aqqYkfI"
        return path + mimeType + suffix + '.jpg';
    } else {
        return path + suffix + mimeType;
    }
}

/** ==================== 时间函数 ==================== */
/**
 * 时间转化
 * time 时间毫秒数,必传
 * format 格式,非必传 yyyy年 MM月 dd日 hh小时 mm分 ss秒，比如传入'始于yyyy-MM-dd的hh:mm',则返回'始于2014-06-15的12:05'
 *
 * 添加了毫秒格式, 用于logger.
 * 添加了星期格式, 用于酒店, 做了'今天'的判断.
 *              -- Modified by Dio Zhu. on 2016.10.20
 * ios下new Date(2016-10-31)报错:invalid date...要改为: 2016/10/31样式
 *              -- Modified by Dio Zhu. on 2016.11.01
 * */
export function formatTime(time, format) {
    if (!time) {
        return '';
    }
    if (typeof time === 'string') {
        time = time.toString().replace(/-/g, '/'); // ios下new Date(2016-10-31)报错:invalid date...要改为: 2016/10/31样式
    }
    if (typeof time === 'number' && time.toString().length === 10) {
        time = parseInt(time + '000');
    }
    // 过去
    var stamp = new Date(time),
        cur = new Date(),
        year = stamp.getFullYear(),
        month = stamp.getMonth() + 1 > 9 ? stamp.getMonth() + 1 : '0' + (stamp.getMonth() + 1),
        day = stamp.getDate() > 9 ? stamp.getDate() : '0' + stamp.getDate(),
        hour = stamp.getHours() > 9 ? stamp.getHours() : '0' + stamp.getHours(),
        minute = stamp.getMinutes() > 9 ? stamp.getMinutes() : '0' + stamp.getMinutes(),
        sec = stamp.getSeconds() > 9 ? stamp.getSeconds() : '0' + stamp.getSeconds(),
        ms =
            stamp.getMilliseconds() < 100
                ? '0' + (stamp.getMilliseconds() < 10 ? '0' + stamp.getMilliseconds() : stamp.getMilliseconds())
                : stamp.getMilliseconds(),
        weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        week = weeks[stamp.getDay()];
    if (format) {
        format = format.replace('yyyy', year);
        format = format.replace('MM', month);
        format = format.replace('dd', day);
        format = format.replace('hh', hour);
        format = format.replace('mm', minute);
        format = format.replace('ss', sec);
        format = format.replace('ms', ms);

        if (year === cur.getFullYear() && stamp.getMonth() === cur.getMonth() && stamp.getDate() === cur.getDate()) {
            week = '今天';
        }
        format = format.replace('week', week);
    } else {
        format = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    }

    return format;
}

/**
 * 把字符串、数字转换成时间对象
 *              -- Author by Dio Zhu. on 2017.2.18
 */
export function dateTrans(dt) {
    if (typeof dt === 'string') {
        dt = dt.toString().replace(/-/g, '/'); // ios下new Date(2016-10-31)报错:invalid date...要改为: 2016/10/31样式
    }
    if (typeof dt === 'number' && dt.toString().length === 10) {
        dt = parseInt(dt + '000');
    }
    dt = new Date(dt);
    return dt;
}

/**
 * 时间是否同年、同月、同日的判断函数
 *              -- Author by Dio Zhu. on 2017.2.18
 */
export function isSameYear(dt1, dt2) {
    if (!dt1 || !dt2) return false;
    dt1 = dt1 instanceof Date ? dt1 : this.dateTrans(dt1);
    dt2 = dt2 instanceof Date ? dt2 : this.dateTrans(dt2);
    return dt1.getFullYear() === dt2.getFullYear();
}

export function isSameMonth(dt1, dt2) {
    if (!dt1 || !dt2) return false;
    dt1 = dt1 instanceof Date ? dt1 : this.dateTrans(dt1);
    dt2 = dt2 instanceof Date ? dt2 : this.dateTrans(dt2);
    return dt1.getFullYear() === dt2.getFullYear() && dt1.getMonth() === dt2.getMonth();
}

export function isSameDay(dt1, dt2) {
    if (!dt1 || !dt2) return false;
    dt1 = dt1 instanceof Date ? dt1 : dateTrans(dt1);
    dt2 = dt2 instanceof Date ? dt2 : dateTrans(dt2);
    return dt1.getMonth() === dt2.getMonth() && dt1.getDate() === dt2.getDate();
}
export const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/** 闰年 */
export const getIsLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
export const getMonthComps = (month, year) => ({
    days: month === 2 && getIsLeapYear(year) ? 29 : daysInMonths[month - 1],
    month,
    year
});

/** 上周 */
export const getPrevWeekComps = (month, year, day) => {
    let dt = year && month && day ? new Date(year, month - 1, day) : new Date();
    dt.setDate(dt.getDate() - 7 + dt.getDay() - 3); // 这么写是为了从周三开始计算本月还是下月、上月。。。
    let comps = getMonthComps(dt.getMonth() + 1, dt.getFullYear());
    // console.log('===========>>>>> ', year, month, day, dt, comps);
    return { ...comps, day: dt.getDate() };
};
/** 下周 */
export const getNextWeekComps = (month, year, day) => {
    let dt = year && month && day ? new Date(year, month - 1, day) : new Date();
    // console.log('===========>>>>> ', year, month, day, dt);
    dt.setDate(dt.getDate() + 7 - dt.getDay() + 3); // 这么写是为了从周三开始计算本月还是下月、上月。。。
    // console.log('===========>>>>> ', year, month, day, dt);
    let comps = getMonthComps(dt.getMonth() + 1, dt.getFullYear());
    // console.log('===========>>>>> ', year, month, day, dt, comps);
    return { ...comps, day: dt.getDate() };
};
/** 上个月 */
export const getPrevMonthComps = (month, year) => {
    if (month === 1) return getMonthComps(12, year - 1);
    return getMonthComps(month - 1, year);
};

/** 下个月 */
// Day/month/year components for next month
export const getNextMonthComps = (month, year) => {
    if (month === 12) return getMonthComps(1, year + 1);
    return getMonthComps(month + 1, year);
};

/** ==================== 各种正则 ==================== */
/**
 * validator校验
 *              -- Author By Dio Zhu. on 2017.5.10
 */
export function validateEmail(val) {
    let re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; // (字母、数字、下划线、-、. )@(字母、数字、-)
    return re.test(val);
}

export function validateTel(val) {
    let re = /^0\d{2,3}-?\d{7,8}$/; // 0开头2~3位区号，可以加-（也可不加），加上7~8位数字
    return re.test(val);
}

export function validateMobile(val) {
    let re = /^1\d{10}$/; // 1开头的11位数字
    return re.test(val);
}

/**
 * 不允许输入特殊字符
 * */
export function validateText(val) {
    let re = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
    return re.test(val);
}

/**
 * 输入手机号的校验
 * */
export function validatePhone(val) {
    let re = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/;
    return re.test(val);
}

/**
 * 数字
 * */
export function validateNumbers(val) {
    let re = /^[0-9]*$/;
    return re.test(val);
}

/**
 * 输入身份证号的校验
 * */
export function validateCard(val) {
    let re = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    return re.test(val);
}

// /**
//  * 银行卡号校验
//  * */
// export function validateBank(val) {
//     return true;
// };

// 军人身份证验证：6-8位字母数字组合 刘俊俊 2018.9.12(产品张佳欣)
export function validateSorderIdenty(val) {
    let re = /^\s*\w{6,8}\s*$/;
    return re.test(val);
}

// 社会保障卡验证--10位数字--孙硕---2017-12-15；
export function validateSocialSecurityCard(val) {
    let re = /^\s*\d{10}\s*$/;
    return re.test(val);
}

// 港澳通行证验证--字母c后至少六位数字后的任意字符--孙硕---2017-12-15；
export function validateHongKongMacauPasser(val) {
    // let re = /^\s*[a-zA-Z]\d{6,12}\s*$/ig;
    let re = /^\s*[a-zA-Z]\d{6,}/;
    return re.test(val);
}

// 台湾居民来往大陆通行证验证--8位数字--孙硕---2017-12-15；
export function validateTaiwanPasser(val) {
    let re = /^\s*\d{8}\s*$/;
    return re.test(val);
}

// 户口本验证--9位数字--孙硕---2017-12-15；
export function validateHouseHoldRegister(val) {
    let re = /^\s*\d{9}\s*$/;
    return re.test(val);
}

// 临时居民身份证验证--18位数字--孙硕---2017-12-15；
export function validateInterimId(val) {
    let re = /^\s*\d{18}\s*$/;
    return re.test(val);
}

// 护照验证---孙硕---2017-12-15；
export function validatePassport(val) {
    let re = /^\s*[a-zA-Z0-9]{6,12}\s*$/;
    return re.test(val);
}

// 外国人永久居留证验证--孙硕---2017-12-15；
export function permitForForeigners(val) {
    // 做有值校验
    return /\w+/.test(val);
}

export function getComputedStyle(el) {
    // return Vue.prototype.$isServer ? {} : document.defaultView.getComputedStyle(el);
    return document.defaultView.getComputedStyle(el);
}

export function completeDate(startTime, endTime, dayNum) {
    // 获取时间戳
    var startTimestamp = new Date(startTime).getTime();
    var endTimestamp = new Date(endTime).getTime();

    if (startTimestamp >= endTimestamp) {
        return false;
    }

    if (endTimestamp - startTimestamp >= dayNum * 24 * 60 * 60 * 1000) {
        return false;
    } else {
        return true;
    }
}

export function getNewTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = year +'-'+month +'-'+ day+' '+ h + ':' + m + ':' + s;
    return time;
}
/*
 * 功能：给图片URL地址增加后缀
 * 解决问题：
 *   首次加载：接收req.headers.accept的值，确认是否有'image/webp'
 *       如果有：支持webp，给对应的webp图
 *       没有：则不支持webp，要啥图给啥图
 *   浏览器中的路由切换：判断浏览器是否支持webp
 *       如果有：支持webp，给对应的webp图
 *       没有：则不支持webp，要啥图给啥图
 *
 * 功能：对图片进行处理（阿里云）
 * @param string url 文件名
 * @param Object {}  参数
 *   width: 图片宽度
 *   height: 图片高度
 *
 * 调整type参数，兼容默认引用;
 * 默认png不做处理，如确定不需要透底，可指定type=jpg，进行类型转后后再启用渐进方案；
 *               -- Mod by Dio sunleqing. on 2019.5.24
 **/
export function format(url, { width = 0, height = 0, type = '', thumb = false } = {}) {
    // 请求过程中，有undefined, ''等URL地址，返回默认图片
    if (!url) return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    // 有地址会被两次处理
    // console.error(url, url.indexOf('x-oss-process') >= 0 || url.indexOf('!/') >= 0);
    if (url.indexOf('x-oss-process') >= 0 || url.indexOf('!/') >= 0) return url;

    // 判断是否支持webp
    let webp = getLocalStorage().get('webp-is-supported') || false;

    // 避免https下访问http图片会报警告（后台存储的sku图片等）。
    url = url.replace('http://', '//').replace('https://', '//');

    // 获取URL地址后的后缀名
    const newType = url.slice(url.lastIndexOf('.') + 1);

    // window.alert(url);
    // window.alert(/upyun-img/.test(url));
    if (/upaiyun.com/.test(url) || /upyun-img/.test(url)) {
        // 又拍云
        if (thumb) return url + '!/fw/50' + (newType === 'png' ? '' : '/gaussblur/5x5'); // 返回缩略图
        let tmp = '!';

        // 2. 格式转换 非空 && (非webp格式 || webp && 支持webp)
        if (webp) {
            // 如果浏览器支持webp，使用webp格式
            tmp += '/format/webp';
        } else if (type || (!type && newType === 'png')) {
            // 如果传入了类型转换 || (未指定类型转换 && 当前url为png类型)
            if (!type && newType === 'png') type = newType; // 默认png不指定类型转换是看不到渐进效果的，这里这么写是为了兼容。 Mod by Dio Zhu. on 2018.8.10
            tmp += `/format/${type}/progressive/true`;
        } else {
            // 默认所有图片都转换为jpg、渐进
            tmp += '/format/jpg/progressive/true';
        }

        // 1. 宽高
        if (width && height) tmp += '/both/' + width + 'x' + height;
        else if (width) tmp += '/fw/' + width;
        else if (height) tmp += '/fh/' + height;

        let newQuery = tmp === '!' ? '' : tmp;
        return url + newQuery;
    } else if (/aliyuncs.com|static.91wuliu.com/.test(url)) {
        // 阿里云oss（自有域名：s01.dongyin.net）
        // console.warn(url, thumb);
        if (thumb)
            return url + '?x-oss-process=image/format,webp/resize,w_51' + (newType === 'png' ? '' : '/blur,r_5,s_5'); // 返回缩略图
        let tmp = '';

        // 1. 针对宽高处理
        if (width) tmp = `/resize,w_${width}`;
        if (height) tmp = `/resize,h_${height}`;
        if (width && height) tmp = `/resize,m_fill,w_${width},h_${height}`;

        // 2. 格式转换 非空 && (非webp格式 || webp && 支持webp)
        if (webp) {
            // 如果浏览器支持webp，使用webp格式
            tmp += '/format,webp';
        } else if (type || (!type && newType === 'png')) {
            // 如果传入了类型转换 || (未指定类型转换 && 当前url为png类型)
            if (!type && newType === 'png') type = newType; // 默认png不指定类型转换是看不到渐进效果的，这里这么写是为了兼容。 Mod by Dio Zhu. on 2018.8.10
            tmp += `/format,${type}/interlace,1`;
        } else {
            // 默认所有图片都转换为jpg、渐进
            tmp += '/format,jpg/interlace,1';
        }

        // 3. 拼接新图片路径
        let newQuery = tmp === '' ? '' : '?x-oss-process=image' + tmp;
        return url + newQuery;
    } else {
        return url;
    }
}


