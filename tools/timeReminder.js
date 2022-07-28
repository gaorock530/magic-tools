const lang = {
  sec: '秒',
  min: '分钟',
  hor: '小时',
  day: '天',
  wek: '周',
  mon: '个月',
  yar: '年'
}

module.exports = function (timestamp) {
  const ONE_MONTH = 30
  const s = timestamp.toString().length === 10
  const diff = Math.abs(Math.floor(s?(Date.now()/1000 - timestamp):((Date.now() - timestamp)/1000)))
  if (diff < 5) {
    return 0
  }else if (diff >= 5 && diff<60) { // second
    return (Math.floor(diff)+''+lang.sec)
  }else if (diff >=60 && (diff/60) < 60) {
    return (Math.floor(diff/60)+''+lang.min)
  }else if ((diff/60) >= 60 && (diff/60/60) < 24) {
    return (Math.floor(diff/60/60)+''+lang.hor)
  }else if ((diff/60/60) >= 24 && (diff/60/60/24) < 7) {
    return (Math.floor(diff/60/60/24)+''+lang.day)
  }else if ((diff/60/60/24) >= 7 && (diff/60/60/24) < ONE_MONTH) {
    return (Math.floor(diff/60/60/24/7)+''+lang.wek)
  }else if ((diff/60/60/24) >= ONE_MONTH && (diff/60/60/24) < 365) {
    return (Math.floor(diff/60/60/24/ONE_MONTH)+''+lang.mon)
  }else if ((diff/60/60/24) > 365) {
    return (Math.floor(diff/60/60/24/365)+''+lang.yar)
  }
}