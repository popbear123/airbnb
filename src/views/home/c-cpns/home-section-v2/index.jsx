import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { HomeSectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  const initialName = infoData.dest_address?.[0].name ?? ""
  const [name, setName] = useState(initialName)

  // useEffect(() => {
  //   setName(infoData.dest_address?.[0].name ?? "")
  // }, [infoData])

  const tabNames = infoData.dest_address?.map(item => item.name)
  const tabChangeHandle = useCallback(function (item) {
    setName(item)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabChange={tabChangeHandle} />
      <SectionRooms list={infoData.dest_list?.[name]} itemWidth="33.333%" />
      <SectionFooter name={name} />
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2