import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Pagination from '@mui/material/Pagination';
import { EntirePaginationWrapper } from './style'
import { fetchEntireRoomsDataAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {
  const { totalCount, pageSize, current } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    pageSize: state.entire.pageSize,
    current: state.entire.current
  }), shallowEqual)

  const dispatch = useDispatch()

  const pages = Math.ceil(totalCount / pageSize)
  const start = current * pageSize + 1
  const end = (current + 1) * pageSize

  function pageChange(event, value) {
    dispatch(fetchEntireRoomsDataAction(value - 1))
  }

  return (
    <EntirePaginationWrapper>
      <Pagination count={pages} onChange={pageChange} />
      <div className="pagination-text">
        {`第 ${start} - ${end} 个房源, 共超过 ${totalCount} 个`}
      </div>
    </EntirePaginationWrapper>
  )
})

export default EntirePagination