import React, { memo } from 'react'
import { HomeBannerWrapper } from './style'

const HomeBanner = memo(() => {
  return (
    <HomeBannerWrapper>
      <img src={require("@/assets/imgs/cover_01.jpeg")} alt="" />
    </HomeBannerWrapper>
  )
})

export default HomeBanner