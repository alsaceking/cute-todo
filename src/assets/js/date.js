const getDateState = (time) => {
  const nowTime = new Date().getTime()
  const diff = time ? Math.round((nowTime - time) / 1000) : 0

  const oneMinutes = 60
  const oneHour = 3600
  const oneDay = 3600 * 24

  let resultState = ''
  if (diff < oneMinutes) {
    resultState = '刚刚'
  } else if (oneMinutes < diff && diff < oneHour) {
    const min = Math.floor(diff / 60)
    resultState = `${min}分钟之前`
  } else if (oneHour < diff && diff < oneDay) {
    const hour = Math.floor(diff / (60 * 60))
    resultState = `${hour}小时之前`
  } else {
    resultState = formatTime(time)
  }

  return resultState
}

const formatTime = (time) => {
  const date = time ? new Date(time) : new Date()

  // let year = date.getFullYear()
  const month = date.getMonth() + 1
  const today = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  // let seconds = date.getSeconds()

  return `${month}月${today}日 ${hours}:${minutes}`
}

const getGreet = () => {
  const date = new Date()
  const hour = date.getHours()

  const greetData = [
    [0, '很晚了，早点休息。'],
    [1, '很晚了，早点休息。'],
    [2, '你又熬夜了！'],
    [3, '快去睡快去睡！！！'],
    [4, '快去睡快去睡！！！'],
    [5, '鸡都醒了，你还不去睡！'],
    [6, '早啊，勤劳的打工人~'],
    [7, '早安~记得吃早餐。'],
    [8, '早啊~记得吃早餐。'],
    [9, '别摸鱼~别摸鱼~别摸鱼！'],
    [10, '别摸鱼~别摸鱼~别摸鱼！'],
    [11, '中午好~可以准备午餐了'],
    [12, '用餐愉快~!'],
    [13, '午休了！午休了！'],
    [14, '继续工作！'],
    [15, '好好工作！'],
    [16, '加油工作！'],
    [17, '认真工作！'],
    [18, '摸鱼吧~'],
    [19, '晚上好~吃完晚饭记得消化'],
    [20, '消化完晚饭后要坚持锻炼！'],
    [21, '消化完晚饭后要坚持锻炼！'],
    [22, '可以酝酿酝酿睡意了'],
    [23, 'good night~ have a sweet dream~']
  ]

  const hourMap = new Map(greetData)

  return hourMap.get(hour)
}

const getDateWeek = (isEng) => {
  // 获取当前星期几
  const date_ = new Date()

  let days = date_.getDay()

  switch (days) {
    case 1:
      days = isEng ? 'Monday' : '星期一'
      break
    case 2:
      days = isEng ? 'Tuesday' : '星期二'
      break
    case 3:
      days = isEng ? 'Wednesday' : '星期三'
      break
    case 4:
      days = isEng ? 'Thursday' : '星期四'
      break
    case 5:
      days = isEng ? 'Friday' : '星期五'
      break
    case 6:
      days = isEng ? 'Saturday' : '星期六'
      break
    case 0:
      days = isEng ? 'Sunday' : '星期日'
      break
  }
  return days
}

export {
  getDateState,
  getDateWeek,
  getGreet
}
