import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex } = props
  const scrollContentRef = useRef()

  useEffect(() => {
    const { scrollWidth, clientWidth } = scrollContentRef.current
    const targetEl = scrollContentRef.current.children[selectIndex]
    const itemLeft = targetEl.offsetLeft
    const itemWidth = targetEl.clientWidth
    let distance = itemWidth * 0.5 + itemLeft - clientWidth * 0.5

    const totalDistance = scrollWidth - clientWidth
    if (distance > totalDistance) distance = totalDistance
    if (distance < 0) distance = 0
    scrollContentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className='scroll-content' ref={scrollContentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator