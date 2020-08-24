import { createStore } from 'redux'

//在这里声明state的初始值，以及通过action执行修改state的方法(reducer)
const counter = (state = { count: 1 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'reduce':
      return { count: count - 1 }
    default:
      return state
  }
}
const store = createStore(counter);

export default store;