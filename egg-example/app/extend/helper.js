'use strict';
const moment = require('moment');

// 日期格式化
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

module.exports = {
  //  计算时间点
  countTime(hour) {
    // 将当前时间改成整点
    const timeStp = this.timestampToTime(new Date().valueOf());
    return timeStp - (hour * 60 * 60 * 1000);
  },
  // 时间戳转换为时间点
  timestampToTime(timestamp) {
    const date = new Date(timestamp);
    const Y = date.getFullYear() + '/';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    // const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    // let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    const time = Y + M + D + h + '00:00';
    const time1 = new Date(time).getTime();
    return time1;
  },
  relativeTime(time) {
    return moment(new Date(time * 1000)).fromNow();
  },
};
