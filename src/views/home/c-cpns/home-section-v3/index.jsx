import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import ScrollView from '@/base-ui/scroll-view'
import SectionRoom from '@/components/section-room'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="plus-list">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <SectionRoom item={item} itemWidth="20%" key={item.id} />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="Plus" />
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3