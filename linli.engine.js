const imgurl = ['https://image-10014871-1251220296.file.myqcloud.com/cus-server/icon_1.png', 'https://image-10014871-1251220296.file.myqcloud.com/cus-server/chatbox.png']
let parmas = {}
const appId = 'DS'
let isCreateIcon = false
let unreadMsg = false // 新消息
let newWriting = false // 新文案
let setinterval = null
let flag = false //鼠标|手指是否按下的标记
let cur = { //记录鼠标|手指按下时的坐标
  x: 0,
  y: 0
}
let nx = '',
  ny = '',
  dx = '',
  dy = '',
  x = '',
  y = ''

let $div = document.createElement('div')
let $img = document.createElement('img')
$div.className = 'chat_pop_btn'
$div.style.cssText = 'width:75px;height:75px;position: fixed;top: 70%;right: 0;padding: 5px;z-index: 10000;'
$img.style.cssText = 'width:65px'
$img.className = 'chart_icon'
// 初始化函数
function ChatInit(appId, data) {
  console.log('电商调用方法传参是', data)
  appId = appId
  parmas = data
  document.body.appendChild($div)
  $div.appendChild($img)
  getUnreadMsgCount()
  getWrinting()
  setinterval = setInterval(() => {
    getUnreadMsgCount()
    getWrinting()
  }, 3000)
}

// 获取未读消息数
function getUnreadMsgCount() {
  let xhrReq = new XMLHttpRequest()
  const openid = parmas['user_id']
  const url = `https://callcenter.timesgroup.cn/api/online_msg_act_from_c.php?act=unread_msg_num&p_number=83915710&openid=${openid}`
  xhrReq.open('get', url, true)
  xhrReq.responseType = 'json'
  xhrReq.onreadystatechange = function () {
    if (xhrReq.readyState == XMLHttpRequest.DONE && xhrReq.status == 200) {
      const res = xhrReq.response
      if (res.res) {
        unreadMsg = true
      } else {
        unreadMsg = false
      }
      setImgSrc()
      if (isCreateIcon) return
      // 请求结束后,在此处写处理代码
      isCreateIcon = true
      AddEventListener()
    }
  }
  xhrReq.send(null)
}
// 获取文案
function getWrinting() {
  let xhrReq = new XMLHttpRequest()
  const type = parmas['type']
  const user_id = parmas['user_id']
  const productCode = parmas['product_code']
  const url = 'http://qas1.shidaijia.com:9081/timescommercewebservices/v2/times/linlicopywriting/writing' // 测试
  // const url = 'https://api.shidaijia.com/timescommercewebservices/v2/times/linlicopywriting/writing' // 正式
  xhrReq.open('post', url, true)
  xhrReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xhrReq.responseType = 'json'
  xhrReq.onreadystatechange = function () {
    if (xhrReq.readyState == XMLHttpRequest.DONE && xhrReq.status == 200) {
      const res = xhrReq.response
      if (res.document && !res.isRead) {
        newWriting = true
      } else {
        newWriting = false
      }
      setImgSrc()
    }
  }
  // from:0
  xhrReq.send(JSON.stringify({
    type: type,
    from: 0,
    userId: user_id,
    productCode: productCode
  }))
}

// 设置红点
function setImgSrc() {
  if (newWriting || unreadMsg) {
    $img.setAttribute('src', imgurl[0])
  } else {
    $img.setAttribute('src', imgurl[1])
  }
}

//按下时的函数
function down() {
  flag = true //确认鼠标|手指按下
  let touch = null
  if (event.touches) {
    touch = event.touches[0] //多个鼠标|手指事件取第一个
  } else {
    touch = event
  }
  cur.x = touch.clientX //记录鼠标|手指当前的x坐标
  cur.y = touch.clientY //记录鼠标|手指当前的y坐标
  dx = $div.offsetLeft //记录div当时的左偏移量
  dy = $div.offsetTop //记录div的上偏移量
}

//如果是鼠标|手指按下则继续执行
function move() {
  if (flag) {
    let touch = null
    if (event.touches) {
      touch = event.touches[0]
    } else {
      touch = event
    }
    nx = touch.clientX - cur.x //记录在鼠标|手指x轴移动的数据
    ny = touch.clientY - cur.y //记录在鼠标|手指y轴移动的数据
    x = dx + nx //div在x轴的偏移量加上鼠标|手指在x轴移动的距离
    y = dy + ny //div在y轴的偏移量加上鼠标|手指在y轴移动的距离
    const c_width = document.body.clientWidth
    const c_height = document.body.clientHeight
    if (x < 0) {
      $div.style.left = 0 + 'px'
    } else if (x > c_width) {
      $div.style.left = (c_width - 75) + 'px'
    } else {
      $div.style.left = x + 'px'
    }
    if (y < 0) {
      $div.style.top = 0 + 'px'
    } else if (y > c_height) {
      $div.style.top = (c_height - 75) + 'px'
    } else {
      $div.style.top = y + 'px'
    }
    //阻止页面的滑动默认事件
    $div.addEventListener('touchmove', function () {
      event.preventDefault()
    }, false)

  }
}
//鼠标|手指释放时候的函数
function end() {
  flag = false //鼠标|手指释放
}

// 添加浮窗touch等监听
function AddEventListener() {
  $div.addEventListener('mousedown', function () {
    down()
  }, false)
  $div.addEventListener('touchstart', function () {
    down()
  }, false)
  $div.addEventListener('mousemove', function () {
    move()
  }, false)
  $div.addEventListener('touchmove', function () {
    // event.preventDefault()
    move()
  }, false)
  $div.addEventListener('mouseup', function () {
    end()
  }, false)
  $div.addEventListener('touchend', function () {
    end()
  }, false)
}

// 移除浮窗touch等监听
function MoveEventListener() {
  setinterval = null
  $div.removeEventListener('mousedown', function () {
    down()
  }, false)
  $div.removeEventListener('touchstart', function () {
    down()
  }, false)
  $div.removeEventListener('mousemove', function () {
    move()
  }, false)
  $div.removeEventListener('touchmove', function () {
    // event.preventDefault()
    move()
  }, false)
  $div.removeEventListener('mouseup', function () {
    end()
  }, false)
  $div.removeEventListener('touchend', function () {
    end()
  }, false)
}
// 点击跳转聊天
$div.onclick = function () {
  const {
    user_id,
    user_mobile,
    asker_id,
    asker_phone,
    product_code,
    type
  } = parmas
  if (user_id) {
    // const url = `http://127.0.0.1:8057/#/mobile_chat?user_id=${user_id}&user_mobile=${user_mobile}&asker_id=${asker_id}&asker_phone=${asker_phone}&product_code=${product_code}&type=${type}` // 开发
    const url = `http://cus-server.linli580.com.cn/#/mobile_chat?user_id=${user_id}&user_mobile=${user_mobile}&asker_id=${asker_id}&asker_phone=${asker_phone}&product_code=${product_code}&type=${type}` // 测试
    // const url = `https://cus-server.linli580.com/#/mobile_chat?user_id=${user_id}&user_mobile=${user_mobile}&asker_id=${asker_id}&asker_phone=${asker_phone}&product_code=${product_code}&type=${type}` // 正式
    window.location.href = url
  }else{
    const url = 'http://dev1.shidaijia.com:9080/sso/third-login?service=http%3A%2F%2Fmobile.shidaijia.com%3A6005%2Fmine%2Faccount%2Fsso%3Ftrusted%3Dtrue&state=%2FonlineChat' // 测试
    // const url = 'https://cas.shidaijia.com/sso/third-login?service=https%3A%2F%2Fm.shidaijia.com%2Fmine%2Faccount%2Fsso%3Ftrusted%3Dtrue&state=%2FonlineChat' // 正式
    window.location.href = url
  }

}
