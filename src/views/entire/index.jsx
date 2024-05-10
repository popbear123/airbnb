import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchEntireRoomsDataAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigsAction } from '@/store/modules/main'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireRoomsDataAction())
    dispatch(changeHeaderConfigsAction({ isFixed: true, isTransition: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire