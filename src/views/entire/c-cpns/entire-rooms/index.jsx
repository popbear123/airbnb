import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { EntireRoomsWrapper } from './style'
import SectionRoom from '@/components/section-room'
import { getDetailInfoAction } from '@/store/modules/detail';

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function itemClick(item) {
    dispatch(getDetailInfoAction(item))
    navigate("/detail")
  }

  return (
    <EntireRoomsWrapper>
      <div className="total">{totalCount}多所住处</div>
      <div className="room-list">
        {
          roomList.map(item => {
            return (
            <SectionRoom
              item={item}
              itemWidth="20%"
              key={item._id}
              itemClick={() => itemClick(item)}
            />
            )
          })
        }
      </div>

      {isLoading && <div className="entire-rooms-cover"></div>}
    </EntireRoomsWrapper>
  )
})

export default EntireRooms