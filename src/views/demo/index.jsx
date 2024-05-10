import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const arr = ["abc", "cba", "nba", "aaa", "bbb", "ccc", "ddd", "eee"]
  const [currentIndex, setCurrentIndex] = useState(0)

  function changeCurrentIndex(isNext) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = arr.length - 1
    if (newIndex > arr.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }
  return (
    <DemoWrapper>
      <button onClick={() => changeCurrentIndex(false)}>上一个</button>
      <button onClick={() => changeCurrentIndex(true)}>下一个</button>
      <Indicator selectIndex={currentIndex}>
        {arr.map(item => <button key={item}>{item}</button>)}
      </Indicator>
    </DemoWrapper>
  )
})

export default Demo