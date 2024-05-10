import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svgs/icon-arrow-left'
import IconArrowRight from '@/assets/svgs/icon-arrow-right'

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setshowLeft] = useState(false)
  const scrollViewRef = useRef()
  const scrollContentRef = useRef()
  const distanceRef = useRef(0)

  useEffect(() => {
    const { scrollWidth, clientWidth }  = scrollViewRef.current
    // console.log(scrollWidth, clientWidth);
    distanceRef.current = scrollWidth - clientWidth
    if (distanceRef.current > 0) setShowRight(true)
  }, [props.children])

  const [currentIndex, setCurrentIndex] = useState(0)
  function handleControlBtn(isRight = true) {
    const newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    const { offsetLeft } = scrollContentRef.current.children[newIndex]
    scrollContentRef.current.style.transform = `translate(-${offsetLeft}px, 0)`
    setCurrentIndex(newIndex)
    setShowRight(offsetLeft < distanceRef.current)
    setshowLeft(offsetLeft > 0)
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className='btn btn-left' onClick={() => handleControlBtn(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='btn btn-right' onClick={() => handleControlBtn(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll-inner" ref={scrollViewRef}>
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView