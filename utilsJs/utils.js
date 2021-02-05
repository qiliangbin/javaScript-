//函数防抖
function debounce(func, ms = 1000) {
    let timer;
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, ms)
    }
}

//节流
function throttle(func, ms = 1000) {
    let canRun = true;
    return function(...args) {
        if (!canRun) return
        canRun = false
        setTimeout(() => {
            func.apply(this, args)
            canRun = true
        }, ms)
    }
}

//数组排序 （升序）
function ascendSort(arr) {
    arr.sort(function(a, b) { return a - b })
}
//数组排序 （降序）
function descendSort(arr) {
    arr.sort(function(a, b) { return b - a })
}
// 数组字符排序
function codeSort(arr) {
    arr.sort(function(a, b) { // 将字符排序
        // console.log(a.charCodeAt(0),b.charCodeAt(0)); // str.charCodeAt(0) => 将str字符串的第0项转换为Unicode编码
        return a.charCodeAt(0) - b.charCodeAt(0); // a-z
        // return b.charCodeAt(0)-a.charCodeAt(0);  // z-a
    })
}

//检测类型的公共接口
/**
 * 
 * @param {*} type 
 *  Object.prototype.toString方法，它可以检测到任何类型，返回的结果是[object Type]的形式,基本可以实现所有类型的检测
 */
function detectType(type) {
    return (obj) => {
        return {}.toString.call(obj) === `[object ${type}]`
    }
}

//实现一个深拷贝
function deepClone(obj) {
    let copy = obj instanceof 'obj' ? {} : []
    for(let i in obj) {
        if(obj.hasOwnProperty(i)) {
            copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
        }
    }
    return copy
}