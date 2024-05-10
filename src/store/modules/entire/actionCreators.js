import { getEntireRoomsData } from '@/server/modules/entire'
import * as actionTypes from './constant'

export const fetchEntireRoomsDataAction = (num = 0) => {

  return async (dispatch, getState) => {
    dispatch(changeCurrentAction(num))
    const { current, pageSize } = getState().entire
    const offset = current * pageSize

    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomsData(offset, pageSize)
    dispatch(changeIsLoadingAction(false))
    // console.log(res);
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}

export const changeCurrentAction = (current) => ({
  type: actionTypes.CHANGE_CURRENT,
  current
})

export const changeRoomListAction = (list) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  list
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTALCOUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})