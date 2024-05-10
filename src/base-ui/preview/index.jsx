import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { PreviewWrapper } from './style'
import IconClose from '@/assets/svgs/icon_close'
import IconArrowLeft from '@/assets/svgs/icon-arrow-left'
import IconArrowRight from '@/assets/svgs/icon-arrow-right'
import IconArrowBottom from '@/assets/svgs/icon_arrow_bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconArrowTop from '@/assets/svgs/icon_arrow_top'

const Preview = memo(({ list = [], onClose, selectIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(selectIndex)
  const [isNext, setIsNext] = useState(true)
  const [showPicList, setShowPicList] = useState(true)

  function closeClick() {
    if (onClose) onClose()
  }

  function controlBtnClick(isRight = false) {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    if (newIndex > list.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = list.length - 1
    setCurrentIndex(newIndex)
    setIsNext(isRight)
  }

  function picItemClick(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  function changePicListDisplay() {
    setShowPicList(!showPicList)
  }

  return (
    <PreviewWrapper $isNext={isNext} $showPicList={showPicList}>
      <div className="top">
        <div className="close" onClick={closeClick}>
          <IconClose />
        </div>
      </div>
      <div className="middle">
        <div className="slider">
          <SwitchTransition mode='in-out'>
            <CSSTransition key={list[currentIndex]} timeout={200} classNames='fade'>
              <img src={list[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="prev btn" onClick={() => controlBtnClick(false)}>
          <IconArrowLeft width="77" height="77" />
        </div>
        <div className="next btn" onClick={() => controlBtnClick(true)}>
          <IconArrowRight width="77" height="77"  />
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-inner">
          <div className="info">
            <div className="info-left">{currentIndex + 1}/{list.length}:room apartment图片1</div>
            <div className="info-right" onClick={changePicListDisplay}>
              <span>隐藏照片列表</span>
              {showPicList ? <IconArrowBottom /> : <IconArrowTop />}
            </div>
          </div>
          <div className="pic-list">
            <Indicator selectIndex={currentIndex}>
              {
                list.map((item, index) => {
                  return (
                    <div className="pic-item" key={item} onClick={() => picItemClick(index)}>
                      <img src={item} alt="" className={classNames({active: currentIndex === index})} />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PreviewWrapper>
  )
})

Preview.propTypes = {
  list: PropTypes.array,
  onClose: PropTypes.func,
  selectIndex: PropTypes.number
}

export default Preview