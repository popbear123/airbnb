import * as actionTypes from './constant'

const initialState = {
  current: 0,
  pageSize: 20,
  roomList: [],
  totalCount: 0,

  isLoading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT:
      return { ...state, current: action.current }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.list }
    case actionTypes.CHANGE_TOTALCOUNT:
      return { ...state, totalCount: action.totalCount }
    case actionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export default reducer