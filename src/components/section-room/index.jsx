import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material';
import { Carousel } from 'antd';

import { RoomItemWrapper } from './style'
import IconArrowLeft from '@/assets/svgs/icon-arrow-left';
import IconArrowRight from '@/assets/svgs/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { item = {}, itemWidth = "25%", itemClick } = props
  const carouselRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  function controlBtnClick(isNext = true, e) {
    isNext ? carouselRef.current.next() : carouselRef.current.prev()

    const length = item.picture_urls.length
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (currentIndex > length - 1) newIndex = 0
    if (currentIndex < 0) newIndex = length - 1
    setCurrentIndex(newIndex)

    e.stopPropagation()
  }

  function roomItemClick(item) {
    if (itemClick) itemClick(item)
  }

  const picEl = (<div className="cover">
    <img src={item.picture_url} alt="" />
  </div>)

  const swiperEl = (
    <>
      <div className="btn prev" onClick={(e) => controlBtnClick(false, e)}>
        <IconArrowLeft width={28} height={28} />
      </div>
      <div className="btn next" onClick={(e) => controlBtnClick(true, e)}>
        <IconArrowRight width={28} height={28} />
      </div>
      <Carousel ref={carouselRef} dots={false}>
        {
          item?.picture_urls?.map(imgUrl => {
            return (
              <div className="cover" key={imgUrl}>
                <img src={imgUrl} alt="" />
              </div>
            )
          })
        }
      </Carousel>
      <div className="indicator">
        <Indicator selectIndex={currentIndex}>
          {
            item?.picture_urls?.map((item, index) => {
              return (
                <div className="dot" key={item}>
                  <span className={classNames('dot-item', {'active': index === currentIndex})}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
    </>
  )

  return (
    <RoomItemWrapper width={itemWidth} onClick={roomItemClick}>
      <div className="inner">
        <div className="swiper">
          {
            !item.picture_urls && picEl
          }
          {
            item.picture_urls && swiperEl
          }
        </div>
        <div className="message" style={{ color: item?.verify_info?.text_color }}>
          {item?.verify_info?.messages?.join(" · ")}
        </div>
        <div className="name">{item.name}</div>
        <div className="price">{item?.price_format}/晚</div>
        <div className="rating">
          <Rating
            defaultValue={item.star_rating}
            size="small"
            sx={{
              color: item.star_rating_color,
              fontSize: "12px"
            }}
            precision={0.1}
            readOnly
          />
          <div
            className="bottom-info"
            style={{
              color: item?.bottom_info?.content_info,
              fontSize: item?.bottom_info?.font_size
            }}
          >
            <div className="count">{item.reviews_count}</div>
            {item?.bottom_info?.content && <div className="tag"> · {item?.bottom_info?.content}</div>}
          </div>
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  item: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem