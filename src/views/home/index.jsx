import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import bannerImg from '@/assets/imgs/cover_01.jpeg'

import { fetchHomeData } from '@/store/modules/home'
import { changeHeaderConfigsAction } from '@/store/modules/main'
import { isEmptyObject } from '@/utils/common'
import HomeWrapper from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'

const Home = memo(() => {
  const { highScoreInfo, goodPriceInfo, recommendInfo, discountInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    recommendInfo: state.home.recommendInfo,
    discountInfo: state.home.discountInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeData())
    dispatch(changeHeaderConfigsAction({ isFixed: true, isTransition: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home