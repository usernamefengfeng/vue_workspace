/* 
  全局事件总线对象模块
*/
const eventBus = {}

//缓存监听的回调函数
let listnersContainer = {}

//添加事件监听的方法
eventBus.on = function (eventName,listener) {
  //取出对应的listeners
  const listeners = listnersContainer[eventName]
  //判断是否存在，若不存在，创建一个新的数组
  if (!listeners) {
    listnersContainer[eventName] = listeners = []
  }
  //将listener保存到listeners中
  listeners.push(listener)
}

//添加分发自定义事件的方法
eventBus.emit = function (eventName,data) {
  //得到对应的listeners
  const listeners = listnersContainer[eventName]
  //判断listeners是否存在--调用listener()
  if (listeners && listeners.length) {
    listeners.forEach(listener => {
      listener(data)
    });
  }
}

//添加解绑事件监听的方法
eventBus.off = function (eventName) {
  //解绑所有eventName的监听
  if (eventName === undefined || eventName === null) {
    listnersContainer = {}
  } else { //解绑对应eventName的监听
    listnersContainer[eventName] = []
    //delete listnersContainer[eventName]
  }
}

//暴露eventBus
export default eventBus

eventBus.on('add', (data) => {
  console.log('add', data)
})
eventBus.on('add', (data) => {
  console.log('add2', data)
})
eventBus.on('delete', (data) => {
  console.log('delete', data)
})

// eventBus.off('add')
// eventBus.off()

eventBus.emit('add', 'atguigu')
eventBus.emit('delete', 'xxxx')