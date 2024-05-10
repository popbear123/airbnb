import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import HeaderWrapper from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { useScrollPosition } from '@/hooks/useScrollPosition'

const AppHeader = memo(() => {
  const { headerConfigs } = useSelector((state) => ({
    headerConfigs: state.main.headerConfigs,
  }), shallowEqual)

  const { isFixed } = headerConfigs

  const { scrollY } = useScrollPosition()
  const isReachTop = scrollY === 0 && headerConfigs.isTransition

  return (
    <HeaderWrapper $isFixed={isFixed} $isReachTop={isReachTop}>
      <div className="top">
        <HeaderLeft isReachTop={isReachTop}/>
        <HeaderCenter isReachTop={isReachTop}/>
        <HeaderRight isReachTop={isReachTop}/>
      </div>
      {isReachTop && <div className="bottom"></div>}
    </HeaderWrapper>
  )
})

export default AppHeader