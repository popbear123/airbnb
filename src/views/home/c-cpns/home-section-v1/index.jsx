import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionRooms list={infoData.list} />
      <SectionFooter />
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1