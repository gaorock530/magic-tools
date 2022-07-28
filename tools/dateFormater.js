module.exports = function (timestamp) {
  const date = new Date(timestamp || Date.now())
  const s = date.toLocaleString('zh-CN', { 
    hour12: false, 
    year: 'numeric' ,
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  return s.replace(/[\/\s:]+/ig, '') + date.getTime().toString().slice(-3)
}