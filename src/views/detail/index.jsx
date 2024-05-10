import React, { memo, useState, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { DetailWrapper } from './style'
import Preview from '@/base-ui/preview'
import { changeHeaderConfigsAction } from '@/store/modules/main'

const Detail = memo(() => {
  const [showPreview, setShowPreview] = useState(false)
  const [selectIndex, setSelectIndex] = useState(0)
  const dispatch = useDispatch()

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  useEffect(() => {
    dispatch(changeHeaderConfigsAction({ isFixed: false, isTransition: false }))
  }, [dispatch])

  function openPreview(index) {
    setSelectIndex(index)
    setShowPreview(true)
  }

  return (
    <DetailWrapper>
      <div className="banner">
        <div className="left">
          <div className="banner-item" onClick={() => openPreview(0)}>
            <img src={detailInfo.picture_urls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo.picture_urls.slice(1, 5).map((item, index) => {
              return (
                <div className="banner-item" key={item} onClick={() => openPreview(index + 1)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
        <div className="show-btn" onClick={() => setShowPreview(true)}>显示照片</div>
        {showPreview && (
          <Preview
            list={detailInfo.picture_urls}
            selectIndex={selectIndex}
            onClose={() => setShowPreview(false)}
          />
        )}
      </div>
    </DetailWrapper>
  )
})

export default Detail